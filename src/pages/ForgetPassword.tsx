import { useState } from 'react'
import softPass from "../assets/image/softpassSVG 3.png"
import AppLoader from '../components/AppComponent/AppLoader'
import FullScreenWidget from '../components/widget/FullScreenWidget'
import HeroWidget from '../components/widget/HeroWidget'
import { useForgetPasswordHook } from '../hooks/auth/forgetpasswordHook'

interface Props { }

function ForgetPassword(props: Props) {

   const [email, setemail] = useState('')
   const [isLoading, setisLoading] = useState(false)

   //Varaibles

   const { submit } = useForgetPasswordHook({ setisLoading })
   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      let data = {
         "email": email
      }

      submit(data)

   }

   return (
      <HeroWidget>
         <AppLoader isLoading={isLoading} />
         <FullScreenWidget>
            <div className='py-12 flex justify-center'><img alt='' src={softPass}></img></div>

            <form
               onSubmit={onSubmit}
               className='bg-white w-full login-input-container rounded-lg overflow-hidden'>
               <h3>
                  <span className=' text-softpasspurple-500'>Forget </span>
                  <span className=' text-softpasspurple-300'>Password</span>
               </h3>

               <div className='input-contain'>
                  <input
                     required
                     value={email}
                     onChange={(e) => {
                        setemail(e.target.value)
                     }}
                     type="email" placeholder='Work Email'></input>
               </div>





               <div className='w-full text-center py-3 garrif'>
                  <button className='next-button'>
                     Submit</button>
               </div>



               <p className='text-[14px] bg-gray-100 text-center w-full flex justify-center py-4'>
                  <p className='w-8/12 garrif text-[13px]'>
                     <span className='text-gray-500'>By signing up, you agree to our Terms, </span>
                     Data Policy and Cookies Policy.</p>
               </p>
            </form>
         </FullScreenWidget>
      </HeroWidget>
   )
}

export default ForgetPassword
