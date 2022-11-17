import Cookies from 'js-cookie'
import { useContext } from "react"
import { showPopUp } from "../../constanst/popupFunc"
import { AuthProvider } from "../../contextProvide/AuthContext"
import apis from "../../services/apiSevices"




export const useSignInHook = (type:{setisLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {isUserLogin, setisUserLogin} = useContext(AuthProvider)

    const {setisLoading} = type

    
    const submit =  (data:object) => {
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.login(data).then((response:any)=> {
            Cookies.set('isLogin', 'true')
            setisUserLogin(true)
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