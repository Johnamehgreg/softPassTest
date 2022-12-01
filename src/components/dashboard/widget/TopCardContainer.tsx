import { useState } from 'react'
import FundWalletModal from '../../../pages/home/pages/Wallet.tsx/modals/FundWalletModal'
import Tabs from './Tabs'

interface Props {
  tabs: Array<any>
}

function TopCardContainer(props: Props) {
  const { tabs } = props

   //VARIABLE
   const [isOpen, setIsOpen] = useState(false)

   //FUNCTION
   const closeModal = (val: boolean)=>{
     setIsOpen(val)
  }
  
  return (
    <div className="flex flex-wrap justify-between">
      {tabs.map((item: any, index: number) => {
        if (item.type != 'regular') return
        return (
          <div className="lg:w-[22%] md:w-[32%] w-[49%] mt-3">
            <Tabs details={item}/>
          </div>
        )
      })}
      <div className="wallet-container">
        <div className="">
          <b className="text-[12px] font-normal block">Total Wallet Balance</b>
          <span className="font-semibold text-softpasspurple-300 text-[18px]">
          <span>&#8358;</span> 40,000.00
          </span>
        </div>
        <div>
          <button 
          onClick={()=>{setIsOpen(true)}}
          className="text-[12px] bg-softpasspurple-300 text-white whitespace-nowrap p-2 py-1 pb-[5px] rounded-md">
            Fund Wallet
          </button>
        </div>
      </div>
      <FundWalletModal isOpen={isOpen} closeModal={closeModal}/>
    </div>
  )
}

export default TopCardContainer
