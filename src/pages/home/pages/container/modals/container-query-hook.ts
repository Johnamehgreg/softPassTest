import { useContext } from "react"
import { useQuery } from "react-query"
import { popType, showPopUp } from "../../../../../constanst/popupFunc"
import { AppProvider } from "../../../../../contextProvide/AppContext"
import apis from "../../../../../services/apiSevices"

interface ARG {
    onError: () => void,
}

export const useContainerHook = (arg: ARG) => {
    const { onError } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-all-container'],
        () => apis.container.getAllContainer(),
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




export const useCreateContainer = (closeModal:Function) => {

    const onError = () => {
        
    }

    const {refetch} = useContainerHook({onError})

    const {setisLoading} = useContext(AppProvider)

    const submit = (data:any) => {

        setisLoading(true)
        
        apis.container.createContainer(data)
        .then((res:any) => {
            closeModal()
            refetch()
            showPopUp({type:popType.success, message:'Container created successfully'})
        })
        .catch(() => {
            showPopUp({type:popType.error, message:'Something went wrong'})
        }).finally(() => {
            setisLoading(false)
        })
    }

    return {
        submit
    }
}


