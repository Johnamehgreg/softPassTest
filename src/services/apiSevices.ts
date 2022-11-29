import { BASE_URL, server } from "../util/axios-util"


const apis = {
    auth: {
        register: (data:any) => server.post(`${BASE_URL}/account/signup`, data),
        login: (data:any) => server.post(`${BASE_URL}/account/login`, data),
        forgetPassword: (data:any) => server.post(`${BASE_URL}/account/request-forget-password`, data),
        verifyForgetPassword: (data:any) => server.post(`${BASE_URL}/account/verify-forget-password`, data),
        verifyAccount: (data:any) => server.post(`${BASE_URL}/account/verification/email`, data),
        resendVerificationToken: (data:any) => server.post(`${BASE_URL}/account/resend/verification/email`, data),
    },

    /// Container 

    container:{
        getAllContainer: () => server.get(`${BASE_URL}/container/list-all?status=true`,),
        createContainer: (data:any) => server.post(`${BASE_URL}/container/create`, data)

    }

}

export default apis