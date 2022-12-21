import { useContext } from "react"
import { useQuery } from "react-query"
import { popType, showPopUp } from "../../../../constanst/popupFunc"
import { AppProvider } from "../../../../contextProvide/AppContext"
import apis from "../../../../services/apiSevices"


interface ARG {
    onError: () => void,
}

export const useComplianceEvent = (arg: ARG) => {
    const { onError, } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-complinces-data',],
        () => apis.compliance.getComplianceDetail(),
        {
            onError: () => {
                onError()
            }
        }



    )

    let data = all?.data

    return {
        refetch,
        data,
        isFetched,
        isError,
        isSuccess,
        isFetching

    }
}


export const useHandleComplianceUpdate = (refetch: Function) => {

    const { setisLoading } = useContext(AppProvider)


    const update = (data: any) => {
        setisLoading(true)
        apis.compliance.updateComplincesDetail(data)
            .then((res: any) => {
                refetch()
                showPopUp({ type: popType.success, message: 'Compliance updated successfully' })
            })
            .catch((err: any) => {
                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }
            })
            .finally(() => {
                setisLoading(false)
            })
    }


    const uploadImage = (type:{data:any, setdefault:Function}) => {

        const {data, setdefault} = type
       
        apis.compliance.updateComplincesDetail(data)
            .then((res: any) => {
                refetch()
                setdefault()
                showPopUp({ type: popType.success, message: 'File uploaded successfully' })
            })
            .catch((err: any) => {
                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }
            })
            .finally(() => {
                // setisLoading(false)
            })
    }

    return {
        update,
        uploadImage
    }
}

