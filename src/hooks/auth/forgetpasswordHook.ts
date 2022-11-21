import { useNavigate } from "react-router-dom"
import { showPopUp } from "../../constanst/popupFunc"
import routes from "../../navigation/Routes"
import apis from "../../services/apiSevices"




export const useForgetPasswordHook = (type:{setisLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {setisLoading} = type
    const navigation = useNavigate()
    
    
    const submit =  (data:object) => {
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.forgetPassword(data).then((response:any)=> {
            if(response){
                navigation(routes.authOtp)
            }
        }).catch((error:any) => {
            console.log(error)
            const {status, data} = error.response
            if(status >=  400 && data.message){
               showPopUp({type:'error', message:data.message})
            } 

        }).finally(() => {
            setisLoading(false)
        })
    }
    return {
        submit
    }
}
export const useVerifyForgetPassword = (type:{setisLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {setisLoading} = type
    const navigation = useNavigate()
    
    
    const submit =  (data:object) => {
        setisLoading(true)
       
        apis.auth.verifyForgetPassword(data).then((response:any)=> {
            if(response){
                showPopUp({type:'success', message:'Password reset successfully'})
                navigation(routes.login)
            }
        }).catch((error:any) => {
            console.log(error)
            const {status, data} = error.response
            if(status >=  400 && data.message){
               showPopUp({type:'error', message:data.message})
            } 

        }).finally(() => {
            setisLoading(false)
        })
    }
    return {
        submit
    }
}
export const useVerifyAccount = (type:{setisLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {setisLoading} = type
    const navigation = useNavigate()
    
    
    const submit =  (data:object) => {
        setisLoading(true)
       
        apis.auth.verifyAccount(data).then((response:any)=> {
            setisLoading(false)
            if(response){
                showPopUp({type:'success', message:'Account  verify successfully'})
                navigation(routes.login)
            }
        }).catch((error:any) => {
            setisLoading(false)
            console.log(error)
            const {status, data} = error.response
            if(status >=  400 && data.message){
               showPopUp({type:'error', message:data.message})
            } else{
                showPopUp({type:'error', message:'Something went wrong'})
            }

        }).finally(() => {
           
        })
    }
    return {
        submit
    }
}