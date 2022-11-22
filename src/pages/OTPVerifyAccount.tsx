import { useEffect, useState } from 'react'

import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import softPass from "../assets/image/softpassSVG 3.png"
import AppLoader from '../components/AppComponent/AppLoader'
import FullScreenWidget from '../components/widget/FullScreenWidget'
import HeroWidget from '../components/widget/HeroWidget'
import { useVerifyAccount } from '../hooks/auth/forgetpasswordHook'
import routes from '../navigation/Routes'
import apis from '../services/apiSevices'


interface Props { }

function OTPVerifyAccount(props: Props) {
   const { } = props


   const [token, settoken] = useState('')
   const [isLoading, setisLoading] = useState(false)

   const navigation = useNavigate()

   const { submit } = useVerifyAccount({ setisLoading })

   const location = useLocation()

   const [otp, setOtp] = useState("");
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(30);


   useEffect(() => {

      const interval = setInterval(() => {
         if (seconds > 0) {
            setSeconds(seconds - 1);
         }

         if (seconds === 0) {
            if (minutes === 0) {
               clearInterval(interval);
            } else {
               setSeconds(59);
               setMinutes(minutes - 1);
            }
         }
      }, 1000);

      return () => {
         clearInterval(interval);
      };
   }, [seconds]);

   const state = location.state as any;





   const sendVerificationToken = () => {

      let data = {
         "email": state?.email
      }
      if (state?.reg === true) {

      } else {
         apis.auth.resendVerificationToken(data)
            .then((res: any) => {
               console.log(res)
            })
            .catch((err: any) => {
               console.log(err)
            })
      }


   }
   const ResendVerificationToken = () => {

      let data = {
         "email": state?.email
      }
      if (state?.reg === true) {

      } else {
         apis.auth.resendVerificationToken(data)
            .then((res: any) => {
               console.log(res)
            })
            .catch((err: any) => {
               console.log(err)
            })
      }


   }


   useEffect(() => {
      sendVerificationToken()
   }, [])





   const handleSubmit = () => {

      if (token.length <= 3) return null

      setisLoading(true)

      let data = {
         "token": token,
      }

      submit(data)

   }

   const resendOTP = () => {
      setMinutes(0);
      setSeconds(30);
      ResendVerificationToken()
   };
   return (
      <HeroWidget>
         <AppLoader isLoading={isLoading} />

         <FullScreenWidget>
            <div className='py-12 flex justify-center'><img alt='' src={softPass}></img></div>
            <div className='bg-white w-full login-input-container rounded-lg overflow-hidden'>

               <h3 className='text-center'>
                  <span className=' text-softpasspurple-500 text-align-center '>Enter OTP from your mail <br /> to verify account </span>
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




               <div className="countdown-text flex">
                  {seconds > 0 || minutes > 0 ? (
                     <p>
                        Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                        {seconds < 10 ? `0${seconds}` : seconds}
                     </p>
                  ) : (
                     <p>Didn't recieve code?</p>
                  )}

                  <button
                     disabled={seconds > 0 || minutes > 0}
                     style={{
                        marginLeft: '10px',
                        color: seconds > 0 || minutes > 0 ? "#4C4C4C" : "#E1217A",
                     }}
                     onClick={resendOTP}
                  >
                     Resend OTP
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
