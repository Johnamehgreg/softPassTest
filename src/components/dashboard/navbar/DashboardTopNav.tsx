import Cookies from 'js-cookie'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowDown } from '../../../assets/image/svg/ArrowDown.svg'
import { ReactComponent as DLogo } from '../../../assets/image/svg/softpassSVG 3.svg'
import { AuthProvider } from '../../../contextProvide/AuthContext'
import routes from '../../../navigation/Routes'
import Navicon from '../../svg-icons/Navicon'



interface Props {
  closebarFunction: Function,
  welcomeNote: String,
  title: String
}


const DashboardTopNav: React.FC<Props> = (props: Props) => {
  const { closebarFunction, welcomeNote, title } = props
  
  const navigation = useNavigate()

  const [showLogout, setshowLogout] = useState(false)
  const {setisUserLogin} = useContext(AuthProvider)


  const logout =  async() => {
    setisUserLogin(false)
    setshowLogout(false)
    navigation(routes.landing)
    try{
      Cookies.remove('isLogin')
    }catch (e){
      
    }
    
  }
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
        <b className="block w-full font-semibold">{welcomeNote}</b>
        <span className="text-[13px] text-gray-400">
          {title}
        </span>
      </div>
      <div className="w-6/12 px-3 hidden md:flex flex-wrap justify-end items-center">
        <div>
          <img
            src={require('../../../assets/image/anti_money_laundry_2.png')}
            className='w-[50px] h-[50px] rounded-full  border-gray-300 border-[3px] p-[3px]'></img>
        </div>
        <div className='min-w-[60px] leading-4 px-3 pr-4'>
          <b className="block w-full text-[13px]">Michael John</b>
          <span className='text-gray-400 text-[12px] '>Manager</span>
        </div>
        <div className='relative'>
          {
            showLogout && (
              <div className="logout-contain">
                <button onClick={() => logout()}>
                  Log out
                </button>
              </div>
            )
          }
          <span 
         
          className='w-[25px] h-[25px] bg-gray-100 grid place-items-center pointer rounded-full'>
            <ArrowDown />
          </span>
        </div>
      </div>
    </div>
  )

}

export default DashboardTopNav
