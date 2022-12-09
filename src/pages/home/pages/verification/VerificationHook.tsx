import { useContext } from "react"
import { popType, showPopUp } from "../../../../constanst/popupFunc"
import { AppProvider } from "../../../../contextProvide/AppContext"
import apis from "../../../../services/apiSevices"


interface Props {
    url:string,
    type:any,
    header:any
}

export const  useVerificationHook= (arg:Props) => {
    const {url, type, header} = arg

    const { setisLoading } = useContext(AppProvider)

    let urlSring : string = '/bvn/basic-bvn'

    


    const submit = (data:any, setrequestCode: React.Dispatch<any>) => {
        setisLoading(true)

        if(header.client_id === null) return showPopUp({ type:popType.error, message:'select container'})

        

        // return console.log(data, 'Varification')
        apis.verification.verificationRequest({data, url:urlSring, header:header})
        .then((response) => {
            console.log(response, 'Varification')
        })
        .catch((err:any) => {
            console.log(err, 'Varification')
            setrequestCode( JSON.stringify(err.response))
        })
        .finally(() =>  setisLoading(false))
    }


    return {
        submit
    }
}

