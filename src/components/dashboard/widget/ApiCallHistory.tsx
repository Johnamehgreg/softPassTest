import React, { useEffect, useState } from 'react'
import { useGetWalletHook } from '../../../pages/home/pages/Wallet.tsx/wallet-query-hook'

interface Props {
    info: Object,
}

 const ApiCallHistory:React.FC<Props> = (props: Props)=> {
    const {info} = props


    const onError = () => {
    }

    const [transactionCOunt, settransactionCOunt] = useState({
      successCount:0,
      failureCount:0,
    })
  

    const {
      failureCallData,
      successCallData,
      faildDataIssuccess,
      failureReftch,
      successReftch,
      failureIsfetched,
      successIsSuccess,
      successIsfetched,
      
    } = useGetWalletHook({ onError })


  const checkSuccess = () => {

   
    if(faildDataIssuccess && failureIsfetched){
      settransactionCOunt({...transactionCOunt, failureCount:failureCallData?.data.data})
      console.log('count successfully', failureCallData?.data.data)
    }
    if(successIsSuccess && successIsfetched){
      settransactionCOunt({...transactionCOunt, successCount:successCallData?.data.data})
    }
  }

  useEffect(() => {
    checkSuccess()
  }, [failureCallData, successCallData ])

    return (
        <div className="py-2  flex justify-between">
        <div className="calls-card">
          <b className="text-[12px] font-normal sm:text-sm block w-full pb-4">
            Successfull Calls
          </b>
          <span className="flex justify-center w-full items-center">
            <b className="text-lg all-flex font-normal">{transactionCOunt.successCount}</b>
            <abbr className="text-[9px] text-softpassgreen-300 bg-softpassgreen-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
              +{transactionCOunt.successCount}%
            </abbr>
          </span>
        </div>
        <div className="calls-card">
          <b className="text-[12px] sm:text-sm block w-full pb-4 font-normal">
            Failed calls
          </b>
          <span className="flex justify-center w-full items-center">
            <b className="text-lg all-flex font-normal">{transactionCOunt.failureCount}</b>
            <abbr className="text-[9px] text-softpasspurple-300 bg-softpasspurple-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
              -25%
            </abbr>
          </span>
        </div>
      </div>
    )
}

export default ApiCallHistory
