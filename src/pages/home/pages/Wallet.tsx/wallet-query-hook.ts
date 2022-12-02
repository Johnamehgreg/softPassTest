import { useContext } from "react"
import { useQuery } from "react-query"
import { popType, showPopUp } from "../../../../constanst/popupFunc"
import { AppProvider } from "../../../../contextProvide/AppContext"
import apis from "../../../../services/apiSevices"

interface ARG {
    onError: () => void,
    status?:boolean
}

export const useGetWalletHook = (arg: ARG) => {
    const { onError, } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-wallet-balance', ],
        () => apis.wallet.getWalletBalance(),
        {
            onError: () => {
                onError()
            }
        }



    )

    let data = all?.data

    console.log(data)

    return {
        refetch,
        data,
        isFetched,
        isError,
        isSuccess,
        isFetching

    }
}


export const useWalletEvent = (closeModal: Function) => {
    const { setisLoading } = useContext(AppProvider)


    const initializeWallet = (data: any, refetch:Function) => {

        setisLoading(true)

        apis.wallet.initializeWallet(data)
            .then((res: any) => {
                closeModal()
                refetch()
                showPopUp({ type: popType.success, message: 'Container created successfully' })
            })
            .catch((err: any) => {

                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }

            }).finally(() => {
                setisLoading(false)
            })
    }

    return {
        initializeWallet
    }


}