import { useEffect, useState } from 'react'
import FundWalletModal from '../../../pages/home/pages/Wallet.tsx/modals/FundWalletModal'
import AppBalanceCard from '../../AppComponent/AppBalanceCard'
import { useGetFailsedCall, useGetSuccessCall } from '../navbar/dashboard-query-hook'
import Tabs from './Tabs'

interface Props {
  tabs: Array<any>
}

function TopCardContainer(props: Props) {
  const { tabs } = props

  //VARIABLE
  const [isOpen, setIsOpen] = useState(false)

  //FUNCTION
  const closeModal = (val: boolean) => {
    setIsOpen(val)
  }


  const [transactionCOunt, settransactionCOunt] = useState({
    successCount: 0,
    failureCount: 0,
  })

  const onError = () => {
  }

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






  const checkSuccess = () => {

    if (isSuccessRequest && successIsFeted) {
      settransactionCOunt({ ...transactionCOunt, successCount:  successData?.data })
      console.log('count successfully', successData.data)
    }
    if (isSuccess && isFetched) {
      settransactionCOunt({ ...transactionCOunt, successCount: failData?.data })
    }
  }

  useEffect(() => {
    checkSuccess()
  }, [failData, successData])


  return (
    <div className="flex flex-wrap justify-between">


      <div className="lg:w-[22%] md:w-[32%] w-[49%] mt-3">
        <Tabs details={{
          amount: `${transactionCOunt.successCount + transactionCOunt.failureCount}`,
          name: "Number of Total calls",
          title: "This month",
          type: "regular",
        }} />
      </div>
      <div className="lg:w-[22%] md:w-[32%] w-[49%] mt-3">
        <Tabs details={{
          amount: `${transactionCOunt.successCount}`,
          name: "Number of Success calls",
          title: "This month",
          type: "regular",
        }} />
      </div>
      <div className="lg:w-[22%] md:w-[32%] w-[49%] mt-3">
        <Tabs details={{
          amount: `${transactionCOunt.failureCount}`,
          name: "Number of Failed calls",
          title: "This month",
          type: "regular",
        }} />
      </div>

      <AppBalanceCard showisFundWallet={() => setIsOpen(true)} />

      <FundWalletModal refetch={() => console.log('dnjd')} isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default TopCardContainer
