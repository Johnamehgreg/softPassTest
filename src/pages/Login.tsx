import { useState } from 'react'
import OtpInput from 'react-otp-input'
import { NavLink, useNavigate } from 'react-router-dom'
import EyeSlashIcon from '../components/svg-icons/EyeSlashIcon'
import SoftpassLogoTransparent from '../components/svg-icons/SoftpassLogoTransparent'
import FullScreenWidget from '../components/widget/FullScreenWidget'
import HeroWidget from '../components/widget/HeroWidget'
import { useSignInHook } from '../hooks/auth/signInHook'
import routes from '../navigation/Routes'


interface Props { }

function Login(props: Props) {
   const { } = props

   const navigation = useNavigate()
   const [otp, setotp] = useState('')

   const [email, setemail] = useState('')
   const [password, setpassword] = useState('')
   const [isLoading, setisLoading] = useState(false)
   const [tab, settab] = useState(1)

   //Varaibles
   const [togglepassword, setTogglepassword] = useState(true)

   const { submit, submitToken } = useSignInHook({ settab })
   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      let data = {
         password: password,
         email: email
      }

      submit(data)

   }
   const onSubmitToken = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      let data = {
         token: otp,

      }

      submitToken(data) 
     

   }

   const handleOpt = (value: any) => {
      setotp(value)
  }

   return (
      <HeroWidget>
         {/* <AppLoader isLoading={isLoading} /> */}
         <FullScreenWidget>
            <div className='py-12 flex justify-center'><SoftpassLogoTransparent /></div>
            {
               tab === 1 && (
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
               )
            }
            {
               tab === 2 && (
                  <form
                     onSubmit={onSubmitToken}
                     className='bg-white w-full login-input-container rounded-lg overflow-hidden'>
                     <h3>
                        <span className=' text-softpasspurple-500'>Sign </span>
                        <span className=' text-softpasspurple-300'>In</span>
                     </h3>

                     <span className="w-full mb-8 text-center text-[12px] block opacity-50 font-normal">
                        Enter the authentication code sent to {email}
                     </span>

                     <OtpInput
                        value={otp}
                        onChange={handleOpt}
                        numInputs={4}
                        containerStyle={{
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           marginBottom: '30px',
                           color: 'black'


                        }}

                        inputStyle={{
                           width: '49px',
                           height: '43px',
                           border: '1px solid #D1D5DB',
                           borderRadius: '4px',
                           color: 'black'
                        }}
                        separator={<span className='mx-0'>  </span>}
                     />


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
               )
            }
         </FullScreenWidget>
      </HeroWidget>
   )
}

export default Login
