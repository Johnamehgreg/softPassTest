import React from 'react'
import HeroWidget from '../components/widget/HeroWidget'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import driverSecurity from '../assets/image/Driver_security.png'
import secured from '../assets/image/secured.png'
import FullWidth from '../components/widget/FullWidth'
import TrustedPartners from '../components/widget/TrustedPartners'
import NewsTeller from '../components/widget/NewsTeller'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'

interface Props {}

function KYC_Driver(props: Props) {
    const {} = props

    return (
       <LandingTemplate>
          <HeroWidget>
                <div className='py-16 text-white'>
                    <h1 className='text-[42px] gotham font-bold text-center'>KYC for Drivers</h1>
                   <div className='garrif text-[14px] flex justify-center'> 
                       <p className='w-11/12 sm:w-[450px] text-center opacity-70'>
                        Verify the details of the your drivers from the identification
                        document uploaded by them and make onboarding seamless
                        </p>
                    </div>
                    <div className='w-full flex justify-center pb-8'>
                        <img src={'https://res.cloudinary.com/softpass/image/upload/v1667477402/taxi_car_htlflk.svg'} alt="" className='w-11/12'></img>
                    </div>
                </div>
          </HeroWidget>

          <FullWidth bg="white">
            <div className="bg-white max-softpass-width md:rounded-2xl relative md:-top-[100px]">
                <TrustedPartners />
            </div>
        </FullWidth>
         

        <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[50px] pt-20 pb-[50px] md:pb-[80px] justify-between items-center">
          <div className="sm:w-5/12 w-full  text-black md:pr-3 pt-6">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
            Get to know your Drivers enough
            </h1>
            <p className='text-[15px] pt-2'>
            With regulations being churned out and the economy growing, customer onboarding can become a cumbersome task.
             Partner with Softpass to solve tedious KYC collection and verification
            </p>
         
          </div>
          <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6">
            {/* <DriverSecurity/> */}
            <img alt="" src={driverSecurity} className="rounded-2xl"></img>
          </div>
        </div>
      </FullWidth>

      <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[0px] pt-16 pb-[50px] md:pb-[150px] justify-between items-center">
        <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6 order-2 md:order-1">
          {/* <Secured/> */}
            <img alt="" src={secured} className="rounded-2xl"></img>
          </div>
          <div className="sm:w-5/12 w-full  text-black md:pl-8 pt-6 order-1 md:order-2">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
            Put your business in safe hands
            </h1>
            <p className='text-[15px] pt-2'>
            A preliminary check of KYC  can eliminate the possibility of your 
            business being exposed to a plethora of non-compliance risks.
            </p>
         
          </div>
        </div>
      </FullWidth>
         
        <TargetedIndustry />

        <HeroWidget>
        <ApiDocumentation />
      </HeroWidget>

        <FullWidth bg={"white"}>
            <div className='py-6 md:py-16'>
            <NewsTeller header/>
            </div>
         </FullWidth>
       </LandingTemplate>
    )
}

export default KYC_Driver
