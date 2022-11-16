import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import softPass from "../assets/image/softpassSVG 3.png"
import AppLoader from '../components/AppComponent/AppLoader'
import EyeSlashIcon from '../components/svg-icons/EyeSlashIcon'
import FullScreenWidget from '../components/widget/FullScreenWidget'
import HeroWidget from '../components/widget/HeroWidget'
import { PopUp } from '../components/widget/PopUp'
import { useSignInHook } from '../hooks/auth/signInHook'
import routes from '../navigation/Routes'


interface Props { }

function Login(props: Props) {
   const { } = props

   const navigation = useNavigate()

   const [email, setemail] = useState('')
   const [password, setpassword] = useState('')
   const [isLoading, setisLoading] = useState(false)

   //Varaibles
   const [togglepassword, setTogglepassword] = useState(true)

   const { submit } = useSignInHook({setisLoading})
   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      let data = {
         "password": password,
         "email":email
     }

      submit(data)

   }

   return (
      <HeroWidget>
         <AppLoader isLoading={isLoading} />
         <PopUp />
         <FullScreenWidget>
            <div className='py-12 flex justify-center'><img alt='' src={softPass}></img></div>

            <form
               onSubmit={onSubmit}
               className='bg-white w-full login-input-container rounded-lg overflow-hidden'>
               <h3>
                  <span className=' text-softpasspurple-500'>Sign </span>
                  <span className=' text-softpasspurple-300'>In</span>
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

               <div className='input-contain'>
                  <input
                     type={togglepassword ? 'password' : 'text'}
                     value={password}
                     onChange={(e) => {
                        setpassword(e.target.value)
                       }}
                     placeholder='New Password'></input>
                  <i onClick={() => { setTogglepassword(!togglepassword) }} className='w-[50px] flex justify-center'>
                     {togglepassword ? <EyeSlashIcon width={'20'} /> : <EyeSlashIcon width={'20'} />}
                  </i>
               </div>

               <div className='login-forgot-password py-3'>
                  <div>
                     <input type='checkbox'></input> Remember me
                  </div>
                  <div 
                  onClick={() => navigation(routes.forgetPassword)}
                  className=' text-softpasspurple-300 font-normal pointer'>
                     Forgot your password?
                  </div>
               </div>

               <div className='w-full text-center py-3 garrif'>
                  <button className='next-button'>
                     Submit</button>
               </div>

               <div className='w-full text-center py-4 garrif pb-8'>
                  Don't have an account? <NavLink className='text-softpasspurple-300' to={routes.register}>Sign up</NavLink>
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

export default Login
