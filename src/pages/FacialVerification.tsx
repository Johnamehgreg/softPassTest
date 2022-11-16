import React, { useState } from 'react'
import FullWidth from '../components/widget/FullWidth'
import TrustedPartners from '../components/widget/TrustedPartners'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import HeroWidget from '../components/widget/HeroWidget'
import facialVerification from '../assets/image/facial-verify.png'
import dashboardFacialVerification from '../assets/image/dashboard-Facial-Identification.png'
import facialScan from '../assets/image/facial-frame.png'
import NewsTeller from '../components/widget/NewsTeller'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'

interface Props {}

function FacialVerification(props: Props) {
  const {} = props

  return (
    <LandingTemplate>
      <HeroWidget>
        <div className="flex flex-wrap max-softpass-width items-center md:pt-[50px] pt-20 pb-[50px] md:pb-[150px]">
          <div className="md:w-6/12 w-full kyc-header">
            <b className="">Facial Verification</b>
            <h1>
              Adopt our AI-powered facial biometric solution to verify facial
              identities{' '}
            </h1>
            <p>
              Leverage our AI-powered technology to confirm identities using
              their face.{' '}
            </p>
            <button className="outline-header-button">Start for free</button>
          </div>
          <div className="md:w-6/12 w-full md:flex md:justify-end">
            <img alt="" src={facialVerification} className="rounded-2xl"></img>
          </div>
        </div>
      </HeroWidget>

      <FullWidth bg="white">
        <div className="bg-white max-softpass-width md:rounded-2xl relative md:-top-[100px]">
          <TrustedPartners />
        </div>
      </FullWidth>
      <FullWidth bg="white">
        <div className="flex flex-wrap max-softpass-width pt-[50px] pb-[50px] md:pb-[150px] items-center">
          <div className="md:w-6/12 w-full">
            <h1 className="text-[35px] text-softpasspurple-300 garrif font-bold">
              Liveness Check
            </h1>
            <ul className="text-[14px] list-disc md:w-10/12 pl-5 pt-6 garrif">
              <li className="pb-3">
                Liveness Check: Our liveness detection technology helps to
                direct a user to perform a series of actions in order to detect
                their presence. It captures, analyzes, and compares patterns
                based on the person’s facial details.
              </li>
              <li className="pb-3">
                OCR: Completely automate the verification of customer
                credentials and documents by converting all information on any
                ID into text which can then be validated. Completely time and
                cost-efficient.
              </li>
            </ul>
          </div>
          <div className="md:w-6/12 w-full pt-10 md:pt-0">
            <img alt="" src={facialScan} className="rounded-2xl"></img>
          </div>
        </div>
      </FullWidth>

      <FullWidth bg="white">
        <div className="flex flex-wrap max-softpass-width pt-[50px] pb-[50px] md:pb-[150px] items-center">
          <div className="md:w-6/12 w-full">
            <img
              alt=""
              src={dashboardFacialVerification}
              className="rounded-2xl md:w-10/12"
            ></img>
          </div>

          <div className="md:w-6/12 w-full">
            <h1 className="text-[35px] text-softpasspurple-300 garrif font-bold">
              Optical Character Recognition (OCR) for businesses
            </h1>
            <p className="text-[14px] garrif mt-5">
              Completely automate the verification of customer credentials and
              documents by converting all information on any ID into text which
              can then be validated. Completely time and cost-efficient.
            </p>
          </div>
        </div>
      </FullWidth>

      <TargetedIndustry />

      <HeroWidget>
        <ApiDocumentation />
      </HeroWidget>

      <FullWidth bg={'white'}>
        <div className="py-16">
          <NewsTeller header={true} />
        </div>
      </FullWidth>
    </LandingTemplate>
  )
}

export default FacialVerification
