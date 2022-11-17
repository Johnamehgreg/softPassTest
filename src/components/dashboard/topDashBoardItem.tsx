import React from 'react'
import ChartIcon from '../../assets/svg/Chart.svg'


const TopDashBoardItem = () => {
    return (
        <div className=" top-dash-item-wrapper">
            <div className="top-dash-item  ">
                <div className="">
                    <p className='text-header-top '>Number of Total calls</p>
                    <div className="flex items-center">
                        <p className='number-header-top mr-2'>23</p>
                        <span>This month</span>
                    </div>
                </div>
                <img src={ChartIcon} />
            </div>
            <div className="top-dash-item ">
                <div className="">
                    <p className='text-header-top '>Number of Total calls</p>
                    <div className="flex items-center">
                        <p className='number-header-top mr-2'>23</p>
                        <span>This month</span>
                    </div>
                </div>
                <img src={ChartIcon} />
            </div>
            <div className="top-dash-item ">
                <div className="">
                    <p className='text-header-top '>Number of Total calls</p>
                    <div className="flex items-center">
                        <p className='number-header-top mr-2'>23</p>
                        <span>This month</span>
                    </div>
                </div>
                <img src={ChartIcon} />
            </div>
            <div className="top-dash-item justify-between flex-1">
                <div className="">
                    <p className='text-header-top '>Total Wallet Balance</p>
                    <p className='amount-header-top mr-2'>N 40,000.00</p>
                </div>
                <button className='top-dash-item-btn'>
                    Fund Wallet
                </button>
            </div>

        </div>
    )
}

export default TopDashBoardItem
