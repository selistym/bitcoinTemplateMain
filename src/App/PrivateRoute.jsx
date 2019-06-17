import React from 'react';
// routing
import { Route, Redirect } from 'react-router-dom';
import ResetPassword from "../ResetPassword";

const jwtDecode = require('jwt-decode');

export const PrivateRoute = props => {
  if (localStorage.getItem("user") && Number.parseInt(new Date().getTime() / 1000) - jwtDecode(JSON.parse(localStorage.getItem("user")).token).exp < 0){    
    return <Route exact path={props.p} component={props.c} />;
  }
  if(props.token){
    return <Route exact path="/forgot_password" component={ResetPassword} />;
  }
    return (<Redirect to="/login" />);
};