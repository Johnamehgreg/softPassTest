import { useEffect, useState } from 'react'
import FundWalletModal from '../../../pages/home/pages/Wallet.tsx/modals/FundWalletModal'
import { useGetWalletHook } from '../../../pages/home/pages/Wallet.tsx/wallet-query-hook'
import AppBalanceCard from '../../AppComponent/AppBalanceCard'
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

    if (faildDataIssuccess && failureIsfetched) {
      settransactionCOunt({ ...transactionCOunt, failureCount: failureCallData?.data.data })
      console.log('count successfully', failureCallData?.data.data)
    }
    if (successIsSuccess && successIsfetched) {
      settransactionCOunt({ ...transactionCOunt, successCount: successCallData?.data.data })
    }
  }

  useEffect(() => {
    checkSuccess()
  }, [failureCallData, successCallData])


  return (
    <div className="flex flex-wrap justify-between">


      <div className="lg:w-[22%] md:w-[32%] w-[49%] mt-3">
        <Tabs details={{
          amount: `${transactionCOunt.successCount + transactionCOunt.successCount}`,
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
