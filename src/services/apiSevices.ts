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
    },


    user:{
        getUserDetails:() => server.get(`${BASE_URL}/account/user-details`,),
    },

    wallet:{
        getWalletBalance:() => server.get(`${BASE_URL}/wallet/balance`,),
        initializeWallet: (data:any) => server.post(`${BASE_URL}/wallet/initilize`, data),
        getTransactionHistory:(type:{ skip:number, status: any, dateRange:any}) => {
            const {skip, status, dateRange} = type
        let url=`${BASE_URL}/wallet/transaction-history?page=${skip}&limit=10${status !== null && `&status=${status}`} ${dateRange?.startDate !== null && `&fromDate=${dateRange?.startDate}`} ${dateRange?.endDate !== null && `&toDate=${dateRange?.endDate}`} `
           
            return server.get(url)
        },
        getSuccessTranasactionCount:() => server.get(`${BASE_URL}/wallet/transaction-success-count`,),
        getFailTranasactionCount:() => server.get(`${BASE_URL}/wallet/transaction-failed-count`,),
    },

    SideNav:{
        getSideNavCategories:() => server.get(`${BASE_URL}/service-category/list-all`,),
        getServicesByCategory:(id:string) => server.get(`${BASE_URL}/service/all-category?category_id=${id}`,),
    }

}

export default apis