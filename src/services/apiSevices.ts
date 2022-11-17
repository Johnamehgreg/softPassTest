import { BASE_URL, server } from "../util/axios-util"


const apis = {
    auth: {
        register: (data:any) => server.post(`${BASE_URL}/account/signup`, data),
        login: (data:any) => server.post(`${BASE_URL}/account/login`, data),
        forgetPassword: (data:any) => server.post(`${BASE_URL}/account/request-forget-password`, data),
        verifyForgetPassword: (data:any) => server.post(`${BASE_URL}/account/verify-forget-password`, data),
    }

}

export default apis