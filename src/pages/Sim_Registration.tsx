import React from 'react'
import HeroWidget from '../components/widget/HeroWidget'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import FullWidth from '../components/widget/FullWidth'
import TrustedPartners from '../components/widget/TrustedPartners'
import NewsTeller from '../components/widget/NewsTeller'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'

interface Props {}

function Sim_Registration(props: Props) {
    const {} = props

    return (
       <LandingTemplate>
          <HeroWidget>
                <div className='py-16 text-white'>
                    <h1 className='text-[42px] gotham font-bold text-center'>KYC for Telecomms</h1>
                   <div className='garrif text-[14px] flex justify-center'> 
                       <p className='w-11/12 sm:w-[450px] text-center opacity-70'>
                       A proper e-KYC solution helps your telecom company 
                       authenticate its customers and ensure the holder is the rightful owner
                        </p>
                    </div>
                    <div className='w-full flex justify-center pb-8'>
                        <img src='https://res.cloudinary.com/softpass/image/upload/v1667477401/sim-reg_amsykf.svg' alt="" className='w-11/12'></img>
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
          <div className="sm:w-5/12 w-full  text-black md:pr-3 pt-6">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
            Keep fraud at bay
            </h1>
            <p className='text-[15px] pt-2'>
            Increase the accuracy and efficiency of your customer 
            identifications processes to identify and prevent fraud.
            </p>
         
          </div>
          <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6">
            {/* <FraudPay/> */}
            <img alt="" src='https://res.cloudinary.com/softpass/image/upload/v1667477313/fraud_pay_m4fdfv.svg' className="rounded-2xl"></img>
          </div>
        </div>
      </FullWidth>

      <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[50px] pt-20 pb-[50px] md:pb-[150px] justify-between items-center">
        <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6 order-2 md:order-1">
            <img alt="" src='https://res.cloudinary.com/softpass/image/upload/v1667477309/dashboard_pay_fqhqbf.svg' className="rounded-2xl"></img>
          </div>
          <div className="sm:w-5/12 w-full  text-black md:pl-8 pt-6 order-1 md:order-2">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
            E-KYC Biometric Solutions 
            </h1>
            <p className='text-[15px] pt-2'>
            SoftPass provides your customers with a reliable e-KYC service during the onboarding process.
             <br></br><br></br>
            Our service automatically encrypts and securely transmits the data to the provider's central database.
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

export default Sim_Registration
