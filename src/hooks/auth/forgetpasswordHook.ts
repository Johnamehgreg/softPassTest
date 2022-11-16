import { showPopUp } from "../../constanst/popupFunc"
import apis from "../../services/apiSevices"




export const useForgetPasswordHook = (type:{setisLoading:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {setisLoading} = type
    
    const submit =  (data:object) => {
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.login(data).then((response:any)=> {
            console.log(response, 'responde')
        }).catch((error:any) => {
            console.log(error)
            const {status, data} = error.response

            if(status >=  400 && data.message){
               showPopUp({type:'error', title:data.message})
            } 

        }).finally(() => {
            setisLoading(false)
        })
    }
    return {
        submit
    }
}