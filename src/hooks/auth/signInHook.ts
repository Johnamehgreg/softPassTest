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


    const submit = (data: object) => {
        setisLoading(true)
        // showPopUp({type:'success', title:'Shoe Pop'})
        apis.auth.login(data).then((response: any) => {
            Cookies.set('isLogin', 'true')
            setisUserLogin(true)
        }).catch((error: any) => {
            const { status, data } = error.response

            if (status === 401) {
                let emailData = {
                    "email": data.email,
                }
                apis.auth.verifyAccount(emailData)
                    .then(() => {
                        navigation(routes.authOtpVerify)
                    }).catch(() => {
                        const { data } = error.response
                        showPopUp({ type: 'error', message: data.message })
                    })


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