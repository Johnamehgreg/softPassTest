import { useContext } from "react"
import { popType, showPopUp } from "../../../../constanst/popupFunc"
import { AppProvider } from "../../../../contextProvide/AppContext"
import apis from "../../../../services/apiSevices"


interface Props {
    type: any,
    header: any
}

export const useVerificationHook = (arg: Props) => {
    const { type, header } = arg

    const { setisLoading } = useContext(AppProvider)


    // if() 


    let HeaderData = {
        "client-id": header?.clientId,
        "container-key": header?.containerKey
    }





    const submit = (data: any, setrequestCode: React.Dispatch<any>) => {
        setisLoading(true)

        if (header.client_id === null) return showPopUp({ type: popType.error, message: 'select container' })




        // return console.log(data, 'Varification')

        // return alert(type)

        apis.verification.verificationRequest({ data, url: getUrl(type), header: HeaderData })
            .then((response) => {
                console.log(response.data, 'Varification')

                let res = JSON.stringify(response.data)
                setrequestCode(response.data)

              

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

const getUrl = (type: string) => {
    switch (type) {
        case 'Basic bvn':
            return '/bvn/basic-bvn';
           
        case 'Tin Verification':
            return '/tin-verify';
            
            case 'Customer verification with phone number':
            return '/bvn/customer-verification-phone';
            
        default:
            return  ''
    }
}


