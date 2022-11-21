import { useNavigate } from "react-router-dom"
import { popType, showPopUp } from "../../constanst/popupFunc"
import routes from "../../navigation/Routes"
import apis from "../../services/apiSevices"




export const useSignUpHook = (type:{setisLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {setisLoading} = type

    const navigation = useNavigate()
    
    const submit =  (data:any) => {
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.register(data).then((response:any)=> {
            showPopUp({type:popType.success, message:'Account created successfully'})
            navigation(routes.authOtpVerify, {state: {email:data.email, reg:true }})
 
        }).catch((error:any) => {

            const {status, data} = error.response

            if(status >=  400 && data.message){
               showPopUp({type:popType.error, message:data.message})
            } 

        }).finally(() => {
            setisLoading(false)
        })
        console.log(data)
    }
    return {
        submit
    }
}