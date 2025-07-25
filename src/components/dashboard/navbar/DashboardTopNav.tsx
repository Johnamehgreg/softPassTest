import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as DLogo } from '../../../assets/image/svg/softpassSVG 3.svg'
import { AppProvider } from '../../../contextProvide/AppContext'
import { AuthProvider } from '../../../contextProvide/AuthContext'
import Navicon from '../../svg-icons/Navicon'
import LogoutDropDown from './DashLogDropDwon'



interface Props {
  closebarFunction: Function,
  welcomeNote: String,
  title: String
}


const DashboardTopNav: React.FC<Props> = (props: Props) => {
  const { closebarFunction, welcomeNote, title } = props

  const navigation = useNavigate()

  const [showLogout, setshowLogout] = useState(false)
  const { setisUserLogin } = useContext(AuthProvider)


  const { userDetail, topNavData } = useContext(AppProvider)


  console.log(userDetail, '@all user detail')




  return (
    <div className="flex items-center flex-wrap w-full md:px-6 px-0 inter">
      <div className="w-full md:hidden flex py-3 items-center px-5">

        <div className='top-logo'>
          <DLogo />
        </div>
        <span
          onClick={() => { closebarFunction(true) }}
        >
          <Navicon width={'30'} color={'grey'} />
        </span>
      </div>
      <div className="w-full md:w-6/12 leading-5 py-3 md:py-0 px-5 bg-softpassgray-50 md:bg-transparent">
        <b className="block w-full font-semibold">{topNavData.title}</b>
        <span className="text-[13px] text-gray-400">
          {topNavData.message}
        </span>
      </div>
      <div className="w-6/12 px-3 hidden md:flex flex-wrap justify-end items-center">
        <div className='w-[50px] h-[50px] rounded-full bg-softpasspurple-300  border-gray-300 border-[3px] flex items-center justify-center p-[3px]'>
          <p className='uppercase text-white text-[16px] font-bold'>{userDetail?.first_name?.slice(0,1)}{userDetail?.last_name?.slice(0,1)}</p>
        </div>
        <div className='min-w-[60px] leading-4 px-3 pr-4'>
          <b className="capitalize block w-full text-[13px]">{userDetail?.first_name} {userDetail?.last_name}</b>
          <span className='text-gray-400 text-[12px] '>Manager</span>
        </div>
        <div className='relative'>
         

          <LogoutDropDown />
        </div>
      </div>
    </div>
  )

}

export default DashboardTopNav
