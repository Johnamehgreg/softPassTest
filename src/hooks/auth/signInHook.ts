import Cookies from 'js-cookie'
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { popType, showPopUp } from "../../constanst/popupFunc"
import { AppProvider } from '../../contextProvide/AppContext'
import { AuthProvider } from "../../contextProvide/AuthContext"
import routes from '../../navigation/Routes'
import apis from "../../services/apiSevices"





export const useSignInHook = (type: { settab:  React.Dispatch<React.SetStateAction<number>>}) => {

    const navigation = useNavigate()

    const {settab} = type
    const { isUserLogin, setisUserLogin } = useContext(AuthProvider)

    const {setis} = useContext(AppProvider)

    const { setisLoading } = useContext(AppProvider)


    const submit = (data: any) => {     
        // return console.log(data?.email)

        let reciedData = data
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.login(data).then((response: any) => {

            const { data } = response.data
            console.log(data.is_2fa_enabled, '@login response')
            if (data.is_2fa_enabled) {
                showPopUp({ type:popType.success, message: data.message })
                settab(2)
            } else {
                let token = data.token.access.token
                Cookies.set('isLogin', 'true')
                Cookies.set('token', token)
                setisUserLogin(true)
            }

        }).catch((error: any) => {
            console.log(error, '@login response')
            const { status, data } = error.response
            let email = reciedData.email

            if (status === 401) {
                navigation(routes.authOtpVerify, { state: { email } })
            }

            if (status >= 400 && data.message) {
                showPopUp({ type: popType.error, message: data.message })
            }

        }).finally(() => {
            setisLoading(false)
        })
    }
    const submitToken = (data: any) => {     
       

        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.login2factorToken(data).then((response: any) => {

            const { data } = response.data
           

            let token = data.token.access.token
            Cookies.set('isLogin', 'true')
            Cookies.set('token', token)
            setisUserLogin(true)
           

        }).catch((error: any) => {
            console.log(error, '@login response')
            const { status, data } = error.response

            

            if (status >= 400 && data.message) {
                showPopUp({ type: popType.error, message: data.message })
            }

        }).finally(() => {
            setisLoading(false)
        })
    }
    return {
        submit,
        submitToken
    }
}