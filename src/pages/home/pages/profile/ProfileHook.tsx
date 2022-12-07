import { useContext } from "react"
import { popType, showPopUp } from "../../../../constanst/popupFunc"
import { AppProvider } from "../../../../contextProvide/AppContext"
import apis from "../../../../services/apiSevices"


export const useProfileHookEvent = () => {

    const { setisLoading, } = useContext(AppProvider)

    const request2Factor = (type: { onSent: Function }) => {

        const { onSent } = type

        setisLoading(true)
        apis.auth.request2FactorToken()
            .then((res: any) => {
                console.log(res, '@resposns request ')
                onSent()
                showPopUp({ type: popType.success, message: 'Token sent successfully' })

            })
            .catch((err: any) => {
                showPopUp({ type: popType.error, message: 'Something went wrong' })
                console.log(err, '@resposns request ')
            }).finally(() => {
                setisLoading(false)
            })
    }
    const verifyToken = (type: { data: any, settab:Function }) => {

        const { data, settab } = type

        if (data.token.length < 4) return showPopUp({ type: popType.error, message: 'Incomplete token' })
        setisLoading(true)
        apis.auth.verify2factorToken(data)
            .then((res: any) => {
                settab(3)
                showPopUp({ type: popType.success, message: '2Factor verify  successfully' })

            })
            .catch((err: any) => {
                const { data } = err.response
                
                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }
                console.log(err, '@resposns request ')
            }).finally(() => {
                setisLoading(false)
            })
    }
    return {
        request2Factor,
        verifyToken
    }
}