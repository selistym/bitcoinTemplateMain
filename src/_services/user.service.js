import config from 'config';
import { authHeader, authRefresh } from '../_helpers';

export const userService = {
    login,
    logout,
    getAll
};

function login(email, password) {
    const uri = `${config.apiUrl}/auth/login`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:email , password:password })
    };

    return fetch(uri, requestOptions)
        .then(response => {
          return handleResponse(response, uri, requestOptions);
        })
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    console.log('logging out');
    localStorage.removeItem('user');
}

function getAll() {
    const uri = `${config.apiUrl}/users`;
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(uri, requestOptions).then(response => {
      return handleResponse(response, uri, requestOptions);
    });
}

function handleResponse(response, request, options) {
    return response.text().then(async text => {
        let data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 403) {
              const refreshed = await authRefresh({ uri: request, opts: options });
              if(refreshed.error === 500) {
                // auto logout if refresh token failed
                logout();
                location.reload(true);
                return null;
              }
              return refreshed;
            }
            if (response.status === 401) {
                // this status now indicates server-side error not related to
                // authorization or tokens
                console.log(response);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
