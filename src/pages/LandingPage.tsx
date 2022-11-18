import AOS from 'aos'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'
import Article from '../components/landingPage/Article'
import BlogSection from '../components/landingPage/BlogSection'
import CircleBreakIcon from '../components/svg-icons/CircleBreakIcon'
import PlayIcon from '../components/svg-icons/PlayIcon'
import ShieldCheckIcon from '../components/svg-icons/ShieldCheckIcon'
import ZigZagicon from '../components/svg-icons/ZigZagicon'
import HeroMidWidget from '../components/widget/HeroMidWidget'
import HeroWidget from '../components/widget/HeroWidget'
import LandingPageCard from '../components/widget/LandingPageCard'
import NewsTeller from '../components/widget/NewsTeller'
import TrustedPartners from '../components/widget/TrustedPartners'
import WhyChooseSoftPass from '../components/widget/WhyChooseSoftPass'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import routes from '../navigation/Routes'


interface Props {}

function LandingPage(props: Props) {
  const {} = props

  useEffect(() => {
    AOS.init({})
  }, [])


  const navigation = useNavigate()
  

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
            <button onClick={() => navigation(routes.register)} className="hero-sub-button">
              <i className="relative -top-[1px]">
                <ShieldCheckIcon width="16" />
              </i>
              &nbsp; Start for free
            </button>
          </div>
        </HeroWidget>
        <section data-aos="fade-up-left" className="px-4 bg-white">
          <TrustedPartners />
          <Article />

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
