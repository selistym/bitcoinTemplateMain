import React from 'react';
// routing
import { Route, Redirect } from 'react-router-dom';
import ResetPassword from "../ResetPassword";
import Signup from "../Signup";
import config from 'config';
const jwtDecode = require('jwt-decode');

export const PrivateRoute = props => {

  try {
    if (localStorage.getItem("user") && Number.parseInt(new Date().getTime() / 1000) - jwtDecode(JSON.parse(localStorage.getItem("user")).accessToken).exp < 0){
      return <Route exact path={props.p} component={props.c} />;
    }
    if(props.type){
      return <Route path="/registration" component={Signup} />
    }
    if(props.token){
      return <Route exact path="/forgot_password" component={ResetPassword} />;
    }
      return (<Redirect to="/login" />);

  } catch (error) {
    const user = JSON.parse(localStorage.getItem("user"))
    const refToken = user.refreshToken;
    const headers = new Headers();
		headers.append('Content-Type', 'application/json');
    headers.append('accept', 'application/json');
    console.log(refToken);
		fetch(`${config.apiUrl}/auth/refresh`, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify({ token: refToken})
		}).then(response => {
      if(response.ok) return response.json();
      return null;
    }).then(data => {
      if(!data) {
        // here we logout user
        return (<Redirect to="/login" />);
      }
			console.log(data.message, "refresh");
			localStorage.setItem('user', {
        ...user,
        refreshToken: data.refreshToken,
        accessToken: data.accessToken
      });
      return <Route exact path={props.p} component={props.c} />;
		});
  }

};
