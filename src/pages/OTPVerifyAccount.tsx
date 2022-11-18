import { useState } from 'react'

import { NavLink } from 'react-router-dom'
import softPass from "../assets/image/softpassSVG 3.png"
import AppLoader from '../components/AppComponent/AppLoader'
import FullScreenWidget from '../components/widget/FullScreenWidget'
import HeroWidget from '../components/widget/HeroWidget'
import { useVerifyAccount } from '../hooks/auth/forgetpasswordHook'
import routes from '../navigation/Routes'


interface Props { }

function OTPVerifyAccount(props: Props) {
   const { } = props

   
   const [token, settoken] = useState('')
   const [isLoading, setisLoading] = useState(false)


   const { submit } = useVerifyAccount({ setisLoading })


  
   const handleSubmit = () => {

      if(token.length <= 3) return null
     
      setisLoading(true)

      let data = {
         "token": token,
      }

      submit(data)

   }

   return (
      <HeroWidget>
         <AppLoader isLoading={isLoading} />

         <FullScreenWidget>
            <div className='py-12 flex justify-center'><img alt='' src={softPass}></img></div>

            <div className='bg-white w-full login-input-container rounded-lg overflow-hidden'>
              
                        <h3 className='text-center'>
                           <span className=' text-softpasspurple-500 text-align-center '>Enter OTP from your mail <br/> to verify account </span>
                        </h3>

                        <div className='input-contain'>
                           <input onChange={(e: any) => settoken(e.target.value)} value={token} type='text' placeholder='OTP Code'></input>
                        </div>

                        {token.length < 0 && (
                           <div className="text-[13px] text-red-500 flex justify-start w-full pl-1">
                              Confirm password and new password do not match
                           </div>
                        )}


                        <div className='w-full text-center py-3 garrif'>
                           <button
                              onClick={() => handleSubmit()}
                              className='next-button'>
                              Submit
                           </button>
                        </div>

                        <div className='w-full text-center py-4 garrif pb-8'>
                           Already have an account? <NavLink className='text-softpasspurple-300' to={routes.login}>Sign in</NavLink>
                        </div>

                        <p className='text-[14px] bg-gray-100 text-center w-full flex justify-center py-4'>
                           <p className='w-8/12 garrif text-[13px]'>
                              <span className='text-gray-500'>By signing up, you agree to our Terms, </span>
                              Data Policy and Cookies Policy.</p>
                        </p>
              

         

            </div>



         </FullScreenWidget>
      </HeroWidget>
   )
}

export default OTPVerifyAccount
