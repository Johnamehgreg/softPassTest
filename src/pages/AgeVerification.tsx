import React from 'react'
import HeroWidget from '../components/widget/HeroWidget'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import FullWidth from '../components/widget/FullWidth'
import TrustedPartners from '../components/widget/TrustedPartners'
import NewsTeller from '../components/widget/NewsTeller'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'

interface Props {}

function Age_Verification(props: Props) {
    const {} = props

    return (
       <LandingTemplate>
          <HeroWidget>
                <div className='py-16 text-white w-full overflow-hidden'>
                    <h1 className='text-[42px] gotham font-bold text-center'>Age Verification</h1>
                   <div className='garrif text-[14px] flex justify-center'> 
                       <p className='w-11/12 sm:w-[450px] text-center opacity-70'>
                            Enhance your age verification process with KYC checks thriough SoftPass
                        </p>
                    </div>
                    <div className='w-full flex justify-center px-2 md:pb-8 md:pt-10'>
                      {/* <AGEVerification/> */}
                        <img src='https://res.cloudinary.com/softpass/image/upload/v1667477293/age-verification_pcn9hy.svg' alt="" className='w-11/12'></img>
                    </div>
                </div>
          </HeroWidget>

          <FullWidth bg="white">
            <div className="bg-white max-softpass-width md:rounded-2xl relative md:-top-[100px]">
                <TrustedPartners />
            </div>
        </FullWidth>
         
        <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[0px] pt-16 pb-[50px] md:pb-[80px] justify-between items-center">
          <div className="sm:w-5/12 w-full  text-black md:pl-8 md:pt-6 ">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham leading-10'>
            Verify the age of your customers with confidence
            </h1>
            <p className='text-[15px] pt-2'>
            SoftPass OCR extracts information from a presented ID
            </p>    
          </div>
          <div className="sm:w-6/12 w-full md:flex justify-center md:justify-end md:pt-6 ">
            <img alt="" src='https://res.cloudinary.com/softpass/image/upload/v1667477302/customer-age_mgcl79.svg' className="rounded-2xl"></img>
          </div>
        </div>
      </FullWidth>
     

      <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[0px] pt-16 pb-[50px] md:pb-[150px] justify-between items-center">
        <div className="sm:w-6/12 w-full md:flex md:justify-end md:pt-6 order-2 md:order-1">
            <img alt="" src={'https://res.cloudinary.com/softpass/image/upload/v1667477312/enable-age-verify_s2zsey.svg'} className="rounded-2xl"></img>
          </div>
          <div className="sm:w-5/12 w-full  text-black md:pl-8 md:pt-6 order-1 md:order-2">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham leading-10'>
            Enable an age verification process that works 
            </h1>
            <p className='text-[15px] pt-2'>
            Our Liveness check service takes a number of selfie photos 
            and validates the user and determines if it's a real person or a passive fake
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

export default Age_Verification
