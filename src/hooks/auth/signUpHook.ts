import { useNavigate } from "react-router-dom"
import { showPopUp } from "../../constanst/popupFunc"
import routes from "../../navigation/Routes"
import apis from "../../services/apiSevices"




export const useSignUpHook = (type:{setisLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {setisLoading} = type

    const navigation = useNavigate()
    
    const submit =  (data:object) => {
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.register(data).then((response:any)=> {
            showPopUp({type:'success', title:'Account created successfully'})

            setTimeout(() => {
                navigation(routes.login)
            }, 4000)
            
        }).catch((error:any) => {

            const {status, data} = error.response

            if(status >=  400 && data.message){
               showPopUp({type:'error', title:data.message})
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