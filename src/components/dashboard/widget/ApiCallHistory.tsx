import React, { useEffect, useState } from 'react'
import { useGetFailsedCall, useGetSuccessCall } from '../navbar/dashboard-query-hook'

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
      refetch:reFetchSuccess,
      data:successData,
      isFetched: successIsFeted ,
      isSuccess: isSuccessRequest,
    } = useGetSuccessCall()
    const { refetch,
      data:failData,
      isFetched,
      isError,
      isSuccess,
      isFetching
    } = useGetFailsedCall()


    const [successCount, setsuccessCount] = useState(0)
  const [failedCOunt, setfailedCOunt] = useState(0)

  
  
  


  const checkSuccess = () => {

    if (isSuccessRequest && successIsFeted) {
      setsuccessCount(successData?.data)
      console.log('count successfully', successData.data)
    }
    if (isSuccess && isFetched) {
      setfailedCOunt(failData?.data)
    }
  }



  useEffect(() => {
    checkSuccess()
  }, [failData, successData])

    return (
        <div className="py-2  flex justify-between">
        <div className="calls-card">
          <b className="text-[12px] font-normal sm:text-sm block w-full pb-4">
            Successfull Calls
          </b>
          <span className="flex justify-center w-full items-center">
            <b className="text-lg all-flex font-normal">{successCount}</b>
            <abbr className="text-[9px] text-softpassgreen-300 bg-softpassgreen-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
              +{successCount}%
            </abbr>
          </span>
        </div>
        <div className="calls-card">
          <b className="text-[12px] sm:text-sm block w-full pb-4 font-normal">
            Failed calls
          </b>
          <span className="flex justify-center w-full items-center">
            <b className="text-lg all-flex font-normal">{failedCOunt}</b>
            <abbr className="text-[9px] text-softpasspurple-300 bg-softpasspurple-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
              -25%
            </abbr>
          </span>
        </div>
      </div>
    )
}

export default ApiCallHistory
