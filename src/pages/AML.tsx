import { useNavigate } from 'react-router-dom'
import AMLHeaderImage from '../assets/image/AML_header_img.png'
import AntiMoneyLaundry from '../assets/image/anti-money-laundry.png'
import AntiMoneylaundry2 from '../assets/image/anti_money_laundry_2.png'
import BusinessVerification from "../assets/image/business-verification.png"
import ApiDocumentation from '../components/landingPage/ApiDocumentation'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'
import FullWidth from '../components/widget/FullWidth'
import HeroWidget from '../components/widget/HeroWidget'
import NewsTeller from '../components/widget/NewsTeller'
import TrustedPartners from '../components/widget/TrustedPartners'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import routes from '../navigation/Routes'

interface Props {}

function AML(props: Props) {
  const {} = props

  const navigation = useNavigate()

  return (
    <LandingTemplate>
      <HeroWidget>
        <div className="flex flex-wrap max-softpass-width md:pt-[50px] pt-20 pb-[50px] md:pb-[150px]">
          <div className="md:w-6/12 w-full kyc-header">
            <b className="">AML for Businesses</b>
            <h1>
              Guarantee Anti-Money Laundering (AML) compliance for your business
            </h1>
            <p>
              Fulfill your AML compliance requirements by leveraging our
              AI-based systems that compare customer selfies with uploaded IDs.{' '}
            </p>
            <button onClick={() => navigation(routes.register)} className="outline-header-button">Start for free</button>
          </div>
          <div className="md:w-6/12 w-full md:flex md:justify-end">
            <img alt="" src={AMLHeaderImage} className="rounded-2xl"></img>
          </div>
        </div>
      </HeroWidget>

      <FullWidth bg="white">
        <div className="bg-white max-softpass-width md:rounded-2xl relative md:-top-[100px]">
          <TrustedPartners />
        </div>
      </FullWidth>

      <FullWidth bg="white">
        <div className="flex flex-wrap max-softpass-width pt-[30px] pb-[50px] md:pb-[150px] items-center">
          <div className="md:w-6/12 w-full md:pr-6">
            <h1 className="text-[35px] text-softpasspurple-300 garrif font-bold">
              AML (ANTI-MONEY-LAUNDERING)
            </h1>
            <p className="text-[14px] garrif mt-5">
              Check if you're compliant with AML regulations and other
              compliance checks to mitigate risks of money and terrorist
              financing.
            </p>
          </div>

          <div className="md:w-6/12 w-full">
            <img
              alt=""
              src={AntiMoneyLaundry}
              className="rounded-2xl md:w-10/12"
            ></img>
          </div>
        </div>
      </FullWidth>

      <FullWidth bg="white">
        <div className="flex flex-wrap max-softpass-width pt-[50px] pb-[50px] md:pb-[150px] items-center">
          <div className="md:w-6/12 w-full order-2 md:order-1 pb-6">
            <img
              alt=""
              src={AntiMoneylaundry2}
              className="rounded-2xl md:w-10/12"
            ></img>
          </div>

          <div className="md:w-6/12 w-full md:pr-6 flex flex-wrap justify-center order-1 md:order-2 pb-6">
            <h1 className="text-[35px] text-softpasspurple-300 garrif font-bold">
              AML (ANTI-MONEY-LAUNDERING)
            </h1>
            <p className="text-[14px] garrif mt-5">
              Conduct PEP and sanction screening as part of your compliance
              process to fulfil regulatory laws
            </p>
          </div>
        </div>
      </FullWidth>

      <FullWidth bg="white">
        <div className="flex flex-wrap max-softpass-width pt-[50px] pb-[50px] md:pb-[150px] items-center">
          <div className="md:w-6/12 w-full md:pr-3">
            <h1 className="text-[35px] text-softpasspurple-300 garrif font-bold">
              Business Verification (KYB)
            </h1>
            <p className='py-5 text-[13px] garrif'>
              Our business verification APIs help you establish the legitimacy
              of your customers business identities by verifying their
              credentials in real-time. Business Verification Services Include;
              CAC Basic Verification: Get the basic details about any business
              in Nigeria by verifying their RC numbers CAC Advanced
              Verification: Get advanced details about any business in Nigeria
              by verifying their RC numbers.
            </p>
            <p className='pt-6'>Business Verification Services Include;</p>
            <ul className="text-[14px] list-disc md:w-10/12 pl-5 pt-2 garrif">
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
          <div className="md:w-6/12 w-full pt-10 md:pt-0 flex justify-center">
            <img alt="" src={BusinessVerification} className="rounded-2xl"></img>
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

export default AML
