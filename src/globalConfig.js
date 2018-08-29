import React from 'react';
import axios from 'axios'
axios.defaults.baseURL = 'https://api.imjad.cn/'
// axios.defaults.headers = {"Content-Type":"application/x-www-form-urlencoded"}
axios.defaults.transformRequest = (a,b) => {
  return new URLSearchParams(a)
}

React.Component.prototype.$http = axios