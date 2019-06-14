import React from 'react';
// routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components

import { loadReCaptcha } from 'react-recaptcha-google';
import { HomePage } from '../HomePage';
import { Login } from '../LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { ResetPassword } from '../ResetPassword';
import { ForgotPassword } from '../ForgotPassword';

import favicon from './fav.png';
function changeFavicon(src) {  
  var link = document.createElement('link'),
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

  const init = () => {
  	loadReCaptcha();
  }  
  const recvToken = new URLSearchParams(location.search).get('token');
  init();
  // returning application
  changeFavicon(favicon)
  return (
    <Router>
      <div>
        <PrivateRoute p="/" c={HomePage} token={recvToken}/>        
        <Route path="/login" component={Login} />
	      <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/forgot_password" component={ResetPassword} />
      </div>
    </Router>
  );
};