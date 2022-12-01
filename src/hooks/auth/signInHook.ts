import Cookies from 'js-cookie'
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { showPopUp } from "../../constanst/popupFunc"
import { AuthProvider } from "../../contextProvide/AuthContext"
import routes from '../../navigation/Routes'
import apis from "../../services/apiSevices"





export const useSignInHook = (type: { setisLoading: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const navigation = useNavigate()
    const { isUserLogin, setisUserLogin } = useContext(AuthProvider)

    const { setisLoading } = type


    const submit = (data: any) => {
        // return console.log(data?.email)

        let reciedData = data
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.login(data).then((response: any) => {
            
            const {data} = response.data

          

            let token = data.token.access.token
            Cookies.set('isLogin', 'true')
            Cookies.set('token', token)
            setisUserLogin(true)
        }).catch((error: any) => {
            
            const { status, data  } = error.response
            let email = reciedData.email

            if (status === 401) {
                navigation(routes.authOtpVerify, {state:{email}})
            }

            if (status >= 400 && data.message) {
                showPopUp({ type: 'error', message: data.message })
            }

        }).finally(() => {
            setisLoading(false)
        })
    }
    return {
        submit
    }
}