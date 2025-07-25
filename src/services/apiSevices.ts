import { BASE_URL, server } from "../util/axios-util"


const apis = {
    auth: {
        register: (data:any) => server.post(`${BASE_URL}/account/signup`, data),
        login: (data:any) => server.post(`${BASE_URL}/account/login`, data),
        forgetPassword: (data:any) => server.post(`${BASE_URL}/account/request-forget-password`, data),
        verifyForgetPassword: (data:any) => server.post(`${BASE_URL}/account/verify-forget-password`, data),
        verifyAccount: (data:any) => server.post(`${BASE_URL}/account/verification/email`, data),
        resendVerificationToken: (data:any) => server.post(`${BASE_URL}/account/resend/verification/email`, data),
        request2FactorToken: () => server.post(`${BASE_URL}/account/enable-2fa`),
        verify2factorToken: (data:any) => server.patch(`${BASE_URL}/account/verify-enable-2fa`, data),
        login2factorToken: (data:any) => server.post(`${BASE_URL}/account/login-2fa`, data),
    },

    /// Container 

    container:{
        getAllContainer: (status:any) => server.get(`${BASE_URL}/container/list-all?status=${status}`,),
        createContainer: (data:any) => server.post(`${BASE_URL}/container/create`, data),
        editContainer: (type:{data:any, id:string}) => server.put(`${BASE_URL}/container/edit?containerId=${type.id}`, type.data),
        disactiveContainer: ( url:string) => server.put(`${BASE_URL}${url}`,)
    },

    //  services 

    // dashboard

    dashboard:{
        getDashboardSummary:(type:{
            servicesId:any,
            startDate:any,
            endDate:any,
        }) => {
            const {servicesId, startDate, endDate } = type

            let sID = servicesId !== null ? `?service_id=${servicesId}` : ''
            let st = startDate !== null ? `&toDate=${startDate}` : ''
            let ed = endDate !== null ? `&fromDate=${endDate}` : ''

            if(servicesId === null){
                 st = startDate !== null ? `?toDate=${startDate}` : ''
            }else {
                 st = startDate !== null ? `&toDate=${startDate}` : ''
            }

            console.log(servicesId, 'services id data')

            let url = `/report/dashboard-summary${sID}${st}${ed}`
            return server.get(`${BASE_URL}${url}`,)
        },

        getSuccessCalls: () => server.get(`${BASE_URL}/report/dashboard-total-success`,),
        getFailedCalls: () => server.get(`${BASE_URL}/report/dashboard-total-failed`,),
    },

    services:{
        getAllServices: () => server.get(`${BASE_URL}/service/all`,),
        getServiceByContainer: (id:string) => server.get(`${BASE_URL}/container-service/all?container_id=${id}`,),
        deleteContainerSrvice: (type:{servicesId:string, containerId:string }) => server.delete(`${BASE_URL}/container-service/remove-service?service_id=${type.servicesId}&container_id=${type.containerId}`,),
        addContainerService: (data:any) => server.post(`${BASE_URL}/container-service/create-bulk`, data),
    },


    user:{
        getUserDetails:() => server.get(`${BASE_URL}/account/user-details`,),
    },
    report:{
        getAllReport:(type:{ skip:number, status: any, dateRange:any}) => {
            const {skip, status, dateRange} = type

            let s = status !== null ? `&status=${status}` : ''
            let st = dateRange?.startDate !== null ? `&toDate=${dateRange?.startDate}` : ''
            let ed = dateRange?.endDate !== null ? `&fromDate=${dateRange?.endDate}` : ''


            let url = `/report/list?limit=10&page=${skip}${s}${st}${ed}`


            return server.get(`${BASE_URL}${url}`,)
        },
    },

    wallet:{
        getWalletBalance:() => server.get(`${BASE_URL}/wallet/balance`,),
        initializeWallet: (data:any) => server.post(`${BASE_URL}/wallet/initilize`, data),
        getTransactionHistory:(type:{ skip:number, status: any, dateRange:any}) => {
            const {skip, status, dateRange} = type
        let url=`${BASE_URL}/wallet/transaction-history?page=${skip}&limit=10${status !== null && `&status=${status}`} ${dateRange?.startDate !== null && `&fromDate=${dateRange?.startDate}`} ${dateRange?.endDate !== null && `&toDate=${dateRange?.endDate}`} `
           
            return server.get(url)
        },
        getAllWalletHistory:() => {
        let url=`${BASE_URL}/wallet/transaction-history `
            return server.get(url)
        },
        getSuccessTranasactionCount:() => server.get(`${BASE_URL}/wallet/transaction-success-count`,),
        getFailTranasactionCount:() => server.get(`${BASE_URL}/wallet/transaction-failed-count`,),
    },

    SideNav:{
        getSideNavCategories:() => server.get(`${BASE_URL}/service-category/list-all`,),
        getServicesByCategory:(id:string) => server.get(`${BASE_URL}/service/all-category?category_id=${id}`,),
    },

    verification:{
        verificationRequest: (type:{data:any, header:any, url:string}) => {

            const {data, url, header} = type


             console.log(data, url, header, 'verification data')
            
            return server.post(`${BASE_URL}/verification${url}`, data, {
                headers:header
            } )
        }
    },


    compliance:{
        getComplianceDetail:() => server.get(`${BASE_URL}/organization/compliance-details`,),
        updateComplincesDetail:(data:any) => server.put(`${BASE_URL}/organization/compliance-update`, data),
    }


}

export default apis