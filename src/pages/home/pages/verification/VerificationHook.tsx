import { useContext } from "react"
import { popType, showPopUp } from "../../../../constanst/popupFunc"
import { AppProvider } from "../../../../contextProvide/AppContext"
import apis from "../../../../services/apiSevices"


interface Props {
    url: string,
    type: any,
    header: any
}

export const useVerificationHook = (arg: Props) => {
    const { url, type, header } = arg

    const { setisLoading } = useContext(AppProvider)

    let urlSring: string = '/bvn/basic-bvn'


    let HeaderData = {
        "client-id": header?.clientId,
        "container-key": header?.containerKey
    }

    console.log(header, "value change")




    const submit = (data: any, setrequestCode: React.Dispatch<any>) => {
        setisLoading(true)

        if (header.client_id === null) return showPopUp({ type: popType.error, message: 'select container' })



        // return console.log(data, 'Varification')
        apis.verification.verificationRequest({ data, url: urlSring, header: HeaderData })
            .then((response) => {
                console.log(response.data, 'Varification')

                let res = JSON.stringify(response.data)
                setrequestCode(res )

                console.log(response.toString(), 'Verification successful')
                showPopUp({ type: popType.success, message: 'Successful' })
            })
            .catch((err: any) => {
                console.log(err, 'Varification')
                const { data } = err.response

                if (data?.message) {
                showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }
                setrequestCode(JSON.stringify(err.response))
            })
            .finally(() => setisLoading(false))
    }


    return {
        submit
    }
}

