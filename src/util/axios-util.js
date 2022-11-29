import axios from "axios";
import Cookies from 'js-cookie';

export const BASE_URL = 'https://dev-api.softpass.net/api/v1'
// export const BASE_URL = process.env.REACT_APP_TEST_BASE_API_URL


export const server = axios.create({
    baseURL:BASE_URL,
    responseType:"json"

})





server.interceptors.request.use(async (config) => {
       const token = Cookies.get('token')

    if(token) {
        config.headers.Authorization = token;
        return config;
    } else {
        return config;
    }
  }, error => {
   return Promise.reject(error);
  });


  server.interceptors.response.use(response => {

    return response
  }, error => {
  
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('token')
        localStorage.removeItem('random')
    }
   
    return Promise.reject(error);
  })