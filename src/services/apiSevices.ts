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
        getAllContainer: (status:any) => server.get(`${BASE_URL}/container/list-all?status=${status}`,),
        createContainer: (data:any) => server.post(`${BASE_URL}/container/create`, data),
        editContainer: (type:{data:any, id:string}) => server.put(`${BASE_URL}/container/edit?containerId=${type.id}`, type.data),
        disactiveContainer: ( url:string) => server.put(`${BASE_URL}${url}`,)



    },

    //  services 

    services:{
        getAllServices: () => server.get(`${BASE_URL}/service/all`,),
        getServiceByContainer: (id:string) => server.get(`${BASE_URL}/container-service/all?container_id=${id}`,),
        deleteContainerSrvice: (type:{servicesId:string, containerId:string }) => server.delete(`${BASE_URL}/container-service/remove-service?service_id=${type.servicesId}&container_id=${type.containerId}`,),
        addContainerService: (data:any) => server.post(`${BASE_URL}/container-service/create`, data),
    }

}

export default apis