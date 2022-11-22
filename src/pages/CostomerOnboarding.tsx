import HeroWidget from '../components/widget/HeroWidget'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'

import ApiDocumentation from '../components/landingPage/ApiDocumentation'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'
import FullWidth from '../components/widget/FullWidth'
import NewsTeller from '../components/widget/NewsTeller'
import TrustedPartners from '../components/widget/TrustedPartners'

interface Props { }

function Costomer_Onboarding(props: Props) {
  const { } = props

  return (
    <LandingTemplate>
      <HeroWidget>
        <div className='py-16 text-white w-full overflow-hidden'>
          <h1 className='text-[42px] gotham font-bold text-center'>Customer Onboarding</h1>
          <div className='garrif text-[14px] flex justify-center'>
            <p className='w-11/12 sm:w-[450px] text-center opacity-70'>
              With the Integration of a single API, Softpass helps
              businesses complete their customer onboarding process seamlessly
              by verifying their data swiftly
            </p>
          </div>
          <div className='w-full flex justify-center md:pb-8 min-w-[600px] md:pt-10'>
            <img src={'https://res.cloudinary.com/softpass/image/upload/v1667477297/cosstomer-boarding_tzs59p.svg'} alt="" className='w-11/12'></img>
          </div>
        </div>
      </HeroWidget>

      <FullWidth bg="white">
        <div className="bg-white max-softpass-width md:rounded-2xl relative md:-top-[100px]">
          <TrustedPartners />
        </div>
      </FullWidth>
{/* 
      <FullWidth bg={'white'}>
        <div className=" opacity-0 flex flex-wrap max-softpass-width md:pt-[0px] pt-16 pb-[50px] md:pb-[150px] justify-between items-center">
          <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6 order-2 md:order-1">
            <img alt="" src={'https://res.cloudinary.com/softpass/image/upload/v1667477012/access-plan_nuvml0.svg'} className="rounded-2xl"></img>
          </div>
          <div className="sm:w-5/12 w-full  text-black md:pl-8 pt-6 order-1 md:order-2">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
              Assess, Plan, Act.
            </h1>
            <p className='text-[15px] pt-2'>
              Adopt KYC best practices by integrating with our
              robust verification system to control risk.
            </p>

          </div>
        </div>
      </FullWidth> */}


      <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[0px] pt-8 pb-[50px] md:pb-[150px] justify-between items-center">
          <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6 order-2 md:order-1">
            <img alt="" src={'https://res.cloudinary.com/softpass/image/upload/v1667477012/access-plan_nuvml0.svg'} className="rounded-2xl"></img>
          </div>
          <div className="sm:w-5/12 w-full  text-black md:pl-8 pt-6 order-1 md:order-2">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
              Assess, Plan, Act.
            </h1>
            <p className='text-[15px] pt-2'>
              Adopt KYC best practices by integrating
              with our robust verification system to control risk.
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
          <NewsTeller header />
        </div>
      </FullWidth>
    </LandingTemplate>
  )
}

export default Costomer_Onboarding
