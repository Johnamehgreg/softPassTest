import React from 'react'
import ShieldCheckIcon from '../components/svg-icons/ShieldCheckIcon'
import HeroWidget from '../components/widget/HeroWidget'
import TrustedPartners from '../components/widget/TrustedPartners'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import CircleBreakIcon from '../components/svg-icons/CircleBreakIcon'
import LandingPageCard from '../components/widget/LandingPageCard'
import ZigZagicon from '../components/svg-icons/ZigZagicon'
import PlayIcon from '../components/svg-icons/PlayIcon'
import NewsTeller from '../components/widget/NewsTeller'
import BlogSection from '../components/landingPage/BlogSection'
import HeroMidWidget from '../components/widget/HeroMidWidget'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'
import WhyChooseSoftPass from '../components/widget/WhyChooseSoftPass'

interface Props {}

function LandingPage(props: Props) {
  const {} = props

  return (
    <LandingTemplate>
      <section>
        <HeroWidget>
          <div className="w-full center-verical">
            <h1 className="hero-header">
              Trusted Digital Identity Verification Service for Businesses
            </h1>
          </div>
          <div className="w-full center-verical">
            <p className="hero-sub-text">
              SoftPass provides automated identity verification solutions
              <br></br> with just one API integration,
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
        <section className="px-4 bg-white">
          <TrustedPartners />
          <article className="landing-article">
            <h2>Instantly verify, Stay compliant</h2>
            <div className="w-full flex justify-center items-center flex-wrap">
              <div className="md:w-5/12 w-full">
                <p className="pb-3">
                  Our services help you verify customer identities, gain deeper
                  insights about users/businesses, detect and prevent fraud.
                </p>
                <ul className="landing-list">
                  <li>
                    Authentication made easy for businesses to verify the
                    identity of online customers
                  </li>
                  <li>
                    Softpass enables companies to identify and take action
                    against fraudulent behavior within their business.{' '}
                  </li>
                  <li>
                    We provide trusted real-time verification data for your
                    applications, helping you build a fraud-free ecosystem.{' '}
                  </li>
                  <li>
                    Our authentic products help you verify, gain deeper insights
                    about users/businesses, detect and prevent fraud.
                  </li>
                </ul>
                <div className="w-full">
                  <button className="get-button">GET IN TOUCH</button>
                </div>
              </div>
              <div className="md:w-5/12 w-full">
                <img
                  alt="design-dashboard"
                  width="100%"
                  src={'https://res.cloudinary.com/softpass/image/upload/v1667388239/slider_h41kjb.gif'}
                ></img>
              </div>
            </div>
          </article>

        <WhyChooseSoftPass/>
        </section>

        <article className="text-sm">
          <div className="flex justify-center flex-wrap w-full py-16 items-center md:min-h-[550px]">
            <div className="w-full my-2 md:w-4/12 lg:w-3/12 mx-2">
              <LandingPageCard>
                <span>
                  <CircleBreakIcon width="30" color={'white'} />
                </span>
                <h2>Facial Verification</h2>
                <p>
                  Adopt our AI-powered facial biometric solution to verify
                  facial identities
                </p>
              </LandingPageCard>
            </div>

            <div className="w-full my-2 md:w-4/12 lg:w-3/12 mx-2">
              <LandingPageCard>
                <span>
                  <ZigZagicon width="30" />
                </span>
                <h2>AML for Businesses</h2>
                <p>Guarantee AML compliance for your business</p>
              </LandingPageCard>
            </div>

            <div className="w-full my-2 md:w-4/12 lg:w-3/12 mx-2">
              <LandingPageCard>
                <span>
                  <PlayIcon width="30" />
                </span>
                <h2>KYC Identity verification</h2>
                <p>Verify your customer information within seconds. </p>
              </LandingPageCard>
            </div>
          </div>
        </article>

        <section className="bg-white pb-12">
          <HeroMidWidget>
            <ApiDocumentation />
          </HeroMidWidget>
          
          <BlogSection header="Our Blog" showLandingInfo={true}/>
          <NewsTeller />
        </section>
      </section>
    </LandingTemplate>
  )
}

export default LandingPage
