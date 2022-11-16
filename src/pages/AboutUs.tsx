import React from 'react'
import HeroWidget from '../components/widget/HeroWidget'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import driver from '../assets/image/01_16taxicar15 1 (1).png'
import { ReactComponent as CUSTOMERAge } from '../assets/image/svg/customer-age.svg'
import { ReactComponent as ENABLEAgeVerify } from '../assets/image/svg/enable-age-verify.svg'
import { ReactComponent as Check } from '../assets/image/svg/OrangeCheck.svg'
import { ReactComponent as SecureExperience }  from '../assets/image/svg/secure-experience.svg'
import secured from '../assets/image/secured.png'
import FullWidth from '../components/widget/FullWidth'
import TrustedPartners from '../components/widget/TrustedPartners'
import NewsTeller from '../components/widget/NewsTeller'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'
import ShieldCheckIcon from '../components/svg-icons/ShieldCheckIcon'
import WhyChooseSoftPass from '../components/widget/WhyChooseSoftPass'
import SvgGallery from '../components/widget/SvgGallery'

interface Props {}

function AboutUs(props: Props) {
    const {} = props

    return (
       <LandingTemplate>
          <HeroWidget>
          <div className="w-full center-verical">
            <h1 className="hero-header">
            Pioneering Online Integrity by building trust and credibility
            </h1>
          </div>
          <div className="w-full center-verical my-0">
            <p className="hero-sub-text max-w-lg ">
            Softpass is a Digital enterprise-based Identity verification Platform driven by business 
            needs to help businesses verify user 
            identities and credentials using technology.
            </p>
          </div>
          <div className="w-full center-verical mb-32">
            <button className="hero-sub-button">
              <i className="relative -top-[1px]">
                <ShieldCheckIcon width="16" />
              </i>
              &nbsp; Start for free
            </button>
          </div>
          </HeroWidget>

          <FullWidth bg="white">
            <div className="bg-white max-softpass-width md:rounded-2xl relative">
                <TrustedPartners />
            </div>
        </FullWidth>
         
        <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[0px] pt-16 pb-[50px] md:pb-[80px] justify-between items-center">
         
        <div className="sm:w-6/12 w-full md:flex justify-center md:justify-end md:pt-6 order-2 md:order-1">
            <SecureExperience/>
            {/* <img alt="" src={secured} className="rounded-2xl"></img> */}
          </div>
          <div className="sm:w-5/12 w-full  text-black md:pl-8 md:pt-6 order-1 md:order-2">
            <span className='text-[10px] uppercase'>Why Choose Us</span>
            <h1 className='capitalize text-[37px] font-bold gotham leading-10 py-4'>
            seamless and secure experience for businesses
            </h1>
            <p className='text-[15px] pt-2'>
            We provide a seamless and secure experience for businesses that are looking to 
             verify their customers in the most convenient and swiftest way possible.
            </p> 
            <ul className='mid-hero-list'>
              <li> <Check width={'20'}/> &nbsp;&nbsp;Get Overview at a glance</li>    
              <li> <Check width={'20'}/> &nbsp;&nbsp;Submit credentials of user</li>  
              <li> <Check width={'20'}/> &nbsp;&nbsp;Autheticate the user</li>   
            </ul>   
          </div>
          
        </div>
      </FullWidth>
     
{/* 
      <FullWidth bg={'white'}>
        <WhyChooseSoftPass/>
      </FullWidth> */}

      <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[0px] pb-[50px] md:pb-[150px] justify-between items-center">
          <div className="sm:w-5/12 w-full  text-black md:pl-8 md:pt-6 ">
            <h1 className='text-[37px] font-bold gotham leading-10 pb-6'>
            We're a team of Experts from diverse backgrounds driven by the same mission
            </h1>
          </div>
          <div className="sm:w-6/12 w-full md:flex md:justify-end md:pt-6 ">
          {/* <ImageGallery/> */}
          <SvgGallery/>
            {/* <img alt="" src={secured} className="rounded-2xl"></img> */}
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

export default AboutUs
