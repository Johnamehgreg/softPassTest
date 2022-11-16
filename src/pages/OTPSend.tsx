import { useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'
import softPass from "../assets/image/softpassSVG 3.png"
import EyeSlashIcon from '../components/svg-icons/EyeSlashIcon'
import FullScreenWidget from '../components/widget/FullScreenWidget'
import HeroWidget from '../components/widget/HeroWidget'

interface Props { }

function OTPSend(props: Props) {
   const { } = props
   const [confirmInitpassword, setConfirmpassword] = useState(false)
   const [initPassword, setNewPassword] = useState(true)
   const newPassword = useRef<any>()
   const [matchPassword, setMatchpassword] = useState(false)
   const [token, settoken] = useState('')
   const confirmPassword = useRef<any>()

   const [currentTab, setCurrentTab] = useState(2)

   const [userInfo, setUserinfo] = useState({
      fullName: '',
      businessname: '',
      workEmail: '',
      currentJob: '',
      aboutUs: '',
      product: '',
      newPassword: '',
      confirmPassword: '',
      country: 'NG'
   })


   const toggleInput = (val: string) => {
      switch (val) {
         case "new-password":
            setNewPassword(!initPassword)
            break;

         case "confirm-password":
            setConfirmpassword(!confirmInitpassword)
            break;
      }
   }

   const setPasswordToUser = (data: any) => {
      setUserinfo({ ...userInfo, ...data })
      setMatchpassword(
         !(newPassword.current.value == confirmPassword.current.value),
      )
   }


   return (
      <HeroWidget>
         <FullScreenWidget>
            <div className='py-12 flex justify-center'><img alt='' src={softPass}></img></div>

            <div className='bg-white w-full login-input-container rounded-lg overflow-hidden'>
               {
                  currentTab === 1 && (
                     <>
                        <h3>
                           <span className=' text-softpasspurple-500'>Enter OTP from your mail </span>
                        </h3>

                        <div className='input-contain'>
                           <input type='text' placeholder='OTP Code'></input>
                        </div>

                        {token.length < 0 && (
                        <div className="text-[13px] text-red-500 flex justify-start w-full pl-1">
                           Confirm password and new password do not match
                        </div>
                     )}


                        <div className='w-full text-center py-3 garrif'>
                           <button className='next-button'>
                              Next
                           </button>
                        </div>

                        <div className='w-full text-center py-4 garrif pb-8'>
                           Already have an account? <NavLink className='text-softpasspurple-300' to=''>Sign in</NavLink>
                        </div>

                        <p className='text-[14px] bg-gray-100 text-center w-full flex justify-center py-4'>
                           <p className='w-8/12 garrif text-[13px]'>
                              <span className='text-gray-500'>By signing up, you agree to our Terms, </span>
                              Data Policy and Cookies Policy.</p>
                        </p>
                     </>
                  )
               }


               {currentTab === 2 && (
                  <>
                     <h3>
                        <span className=' text-softpasspurple-500'>Enter new password </span>
                     </h3>
                     <div className="input-contain">
                        <input
                           value={userInfo.newPassword}
                           type={initPassword ? "password" : 'text'}
                           onChange={(e) => {
                              setPasswordToUser({ newPassword: e.target.value })
                           }}
                           placeholder="New Password"
                           ref={newPassword}
                        ></input>
                        <i onClick={() => { toggleInput('new-password') }} className="w-[50px] flex justify-center">
                           {initPassword ? <EyeSlashIcon width={'20'} /> : <EyeSlashIcon width={'20'} />}
                        </i>
                     </div>
                     <div className="input-contain">
                        <input
                           type={confirmInitpassword ? "password" : 'text'}
                           onChange={(e) => {
                              setPasswordToUser({ confirmPassword: e.target.value })
                           }}
                           value={userInfo.confirmPassword}
                           placeholder="Confirm Password"
                           ref={confirmPassword}
                        ></input>
                        <i onClick={() => { toggleInput('confirm-password') }} className="w-[50px] flex justify-center">
                           {confirmInitpassword ? <EyeSlashIcon width={'20'} /> : <EyeSlashIcon width={'20'} />}
                        </i>
                     </div>
                     {matchPassword && (
                        <div className="text-[13px] text-red-500 flex justify-start w-full pl-1">
                           Confirm password and new password do not match
                        </div>
                     )}

                     <div className='w-full text-center py-3 garrif'>
                        <button className='next-button'>
                           Submit
                        </button>
                     </div>


                     <div className='w-full text-center py-4 garrif pb-8'>
                        Already have an account? <NavLink className='text-softpasspurple-300' to=''>Sign in</NavLink>
                     </div>

                     <p className='text-[14px] bg-gray-100 text-center w-full flex justify-center py-4'>
                        <p className='w-8/12 garrif text-[13px]'>
                           <span className='text-gray-500'>By signing up, you agree to our Terms, </span>
                           Data Policy and Cookies Policy.</p>
                     </p>
                  </>
               )}



            </div>



         </FullScreenWidget>
      </HeroWidget>
   )
}

export default OTPSend
