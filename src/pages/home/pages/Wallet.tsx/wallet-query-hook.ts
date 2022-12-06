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
    const { 
        data: successCallData, 
        isFetching:successIsFetching, 
        refetch:successReftch, 
        isFetched:successIsfetched, 
        isError:successIsError, 
        isSuccess:successIsSuccess } = useQuery(
        ['get-success-calls', ],
        () => apis.wallet.getSuccessTranasactionCount(),
        {
            onError: () => {
                onError()
            }
        }



    )
    const { 
        data: failureCallData, 
        isFetching:failureIsFetching, 
        refetch:failureReftch, 
        isFetched:failureIsfetched, 
        isError:failureIsError, 
        isSuccess:faildDataIssuccess } = useQuery(
        ['get-fail-calls', ],
        () => apis.wallet.getFailTranasactionCount(),
        {
            onError: () => {
                onError()
            }
        }



    )

    let data = all?.data

    console.log(failureCallData, 'Success Calls')

    return {
        successCallData,
        refetch,
        failureReftch,
        successReftch,
        failureIsfetched,
        successIsFetching,
        faildDataIssuccess,
        successIsfetched,
        data,
        failureCallData,
        failureIsFetching,
        isFetched,
        isError,
        isSuccess,
        isFetching,
        successIsSuccess



    }



}

interface Trans{
    onError:Function, 
    skip:number,
    status:any,
    dateRange:any
}

export const useWalletTransactionHistory = (arg:Trans) => {

    const { onError, skip, status, dateRange} = arg
    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-wallet-transaction-history', skip, dateRange.startDate, dateRange.endDate, status ],
        () => apis.wallet.getTransactionHistory({skip, status, dateRange}),
        {
            onError: () => {
                onError()
            }
        }
)

    let data = all?.data

    return {
        data, 
        isSuccess,
        isFetched,
        isFetching
    }
}

export const useWalletEvent = (closeModal: Function) => {
    const { setisLoading } = useContext(AppProvider)


    const initializeWallet = (data: any,
         refetch:Function, 
         onIframeLoad:(data:any) => void ) => {

        setisLoading(true)

        apis.wallet.initializeWallet(data)
            .then((res: any) => {
                // closeModal()
                onIframeLoad(res.data.data)
                setisLoading(false)
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