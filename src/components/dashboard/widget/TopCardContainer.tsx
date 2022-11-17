import React from 'react'
import Tabs from './Tabs'

interface Props {
  tabs: Array<any>
}

function TopCardContainer(props: Props) {
  const { tabs } = props

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
            N 40,000.00
          </span>
        </div>
        <div>
          <button className="text-[12px] bg-softpasspurple-300 text-white whitespace-nowrap p-2 py-1 pb-[5px] rounded-md">
            Fund Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopCardContainer
