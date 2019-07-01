import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { Login } from '../LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { ResetPassword } from '../ResetPassword';
import { ForgotPassword } from '../ForgotPassword';
import { Signup } from '../Signup';
import favicon from '../../static/fav.png';
  
const changeFavicon = src => {  
  let link = document.createElement('link'),
      oldLink = document.getElementById('dynamic-favicon');
  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.type = 'image/png/ico';
  link.href = src;
  if (oldLink) {
   document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}
export const App = () => {  
  const recvToken = new URLSearchParams(location.search).get('token')
  const isRegistration = new URL(location.href).pathname.includes('/registration');
  console.log(isRegistration, 'regist')
  changeFavicon(favicon);

  return (
    <Router>
      <div>
        <PrivateRoute p="/" c={HomePage} token={recvToken} type={isRegistration}/>        
        <Route path="/login" component={Login} />
	      <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/forgot_password" component={ResetPassword} />
        <Route path="/registration" component={Signup} />
      </div>
    </Router>
  );
};