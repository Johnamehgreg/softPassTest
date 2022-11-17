import React from 'react'
import HeroWidget from '../components/widget/HeroWidget'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'

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

function ContactUs(props: Props) {
  const {} = props

    return (
       <LandingTemplate>
            <HeroWidget>         
                  <div className='flex flex-wrap items-center max-softpass-width md:pt-[100px] pt-20 pb-[50px] md:pb-[150px]'>
                <div className='md:w-6/12 w-full text-white pt-8'>
                    <h1 className='text-[40px] gotham'>DISCOVER US</h1>
                    <p className='text-[15px] garrif md:w-7/12'>SoftPass is here to help you;
                    Our experts are available to answer any questions you might have. We’ve got the answers.</p>
                   
                </div>
                <div className='md:w-6/12 w-full flex justify-center pt-8'>
                    <form className='md:w-9/12 sm:w-10/12 w-11/12 bg-white p-4 rounded-lg garrif max-w-lg'>
                        <div>
                            <label className='my-4  block'>Email Address</label>
                            <input className='outline-none border-[2px] border-softpassblue-100 rounded-2xl h-16 w-full px-4'></input>
                        </div>
                        <div>
                            <label className='my-4  block'>How can we help you?</label>
                            <textarea className='outline-none border-[2px] border-softpassblue-100 rounded-2xl h-32 w-full px-4 resize-none'></textarea>
                        </div>

              <div className="my-6">
                <button className="w-full h-12 bg-softpasspurple-300 text-white text-center rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </HeroWidget>

      <FullWidth bg="white">
        <div className="bg-white max-softpass-width md:rounded-2xl relative">
          <TrustedPartners />
        </div>
      </FullWidth>

      <FullWidth bg={'white'}>
        <div className="py-6 md:py-16">
          <NewsTeller header />
        </div>
      </FullWidth>
    </LandingTemplate>
  )
}

export default ContactUs
