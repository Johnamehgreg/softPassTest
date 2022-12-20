import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DashboardPng from "../assets/svg/Desktop - 7.svg"
// import dashboardFrame from "../assets/svg/kyc_header_image.svg"
import SubRoute from '../components/kyc/SubRoute'
import CallBoxIcon from '../components/svg-icons/CallBoxIcon'
import HouseBoxIcon from '../components/svg-icons/HouseBoxIcon'
import SettingsBoxIcon from '../components/svg-icons/SettingsBoxIcon'
import FullWidth from '../components/widget/FullWidth'
import HeroWidget from '../components/widget/HeroWidget'
import NewsTeller from '../components/widget/NewsTeller'
import TrustedPartners from '../components/widget/TrustedPartners'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'
import routes from '../navigation/Routes'




interface Props { }

function KYC(props: Props) {

    const ScrollRef = useRef<null | HTMLDivElement>(null);

    const location = useLocation();
    const state = location.state as any;

    const navigation = useNavigate()




    useEffect(() => {
        if (state?.scroll) {
            setTimeout(() => {
                ScrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
            }, 300)
        }
    }, [location])


    const { } = props

    return (
        <LandingTemplate>
            <HeroWidget>
                <div className='flex flex-wrap max-softpass-width md:pt-[50px] pt-20 pb-[50px] md:pb-[150px]'>
                    <div className='md:w-6/12 w-full kyc-header'>
                        <b className=''>KYC Identity verification</b>
                        <h1>Verify your customer <br></br>information within seconds </h1>
                        <p>Swift and Secured Customer Onboarding with e-KYC</p>
                        <button
                            onClick={() => navigation(routes.contactUs)}
                            className="get-button">GET IN TOUCH</button>
                        {/* <button className="get-button">GET IN TOUCH
                   
                    </button> */}
                    </div>
                    <div className='md:w-6/12 w-full'>
                        <img alt="" src='https://res.cloudinary.com/softpass/image/upload/v1671448276/kyc_header_image_ah9fna.svg' className="rounded-2xl"></img>
                    </div>
                </div>
            </HeroWidget>



            <FullWidth bg="white">

                <div className='bg-white max-softpass-width md:rounded-2xl relative md:-top-[100px]'>
                    <TrustedPartners />
                </div>
            </FullWidth>
            <FullWidth bg="white">
                <SubRoute />
            </FullWidth>

            <FullWidth bg={'white'}>
                <div className='flex flex-wrap justify-center items-center  max-softpass-width '>
                    <img alt="" src={DashboardPng} className="w-11/12 md:w-8/12"></img>
                </div>
            </FullWidth>

            <HeroWidget>

                <div className='flex flex-wrap max-softpass-width pt-[50px] pb-[50px] md:pb-[150px]' >
                    <div className='text-white flex flex-wrap justify-center garrif'>
                        <span ref={ScrollRef} className=' text-softpasspurple-300'>KYC</span>
                        <h1 className='text-[35px] font-bold gotham w-full text-center'>Customer Information Verification</h1>
                        <p className='w-11/12 sm:w-8/12 md:w-6/12 text-center pt-4 pb-8'>SoftPass helps businesses confirm the authenticity and accuracy of information provided by their customers in multiple ways using reliable and legitimate source databases.</p>
                    </div>

                    <div className='text-white flex flex-wrap justify-center garrif'>
                        <div className='w-full sm:w-6/12'>
                            <div className='costomer-info-article'>
                                <span> <CallBoxIcon width={'48'} /></span>
                                <div>
                                    <b>Phone number verification:</b>
                                    <p>Verify the authenticity of mobile numbers using our phone number verification service. Confirm carrier, location, and validity of any phone number.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full sm:w-6/12'>
                            <div className='costomer-info-article'>
                                <span> <HouseBoxIcon width={'48'} /></span>
                                <div>
                                    <b>Bank Account Verification (NUBAN):</b>
                                    <p>Our NUBAN lookup service allows you to verify any Nigerian bank account number easily.</p>
                                </div>
                            </div>
                            <div className='costomer-info-article'>
                                <span> <SettingsBoxIcon width={'48'} /></span>
                                <div>
                                    <b>Age verification:</b>
                                    <p>Adopt our customer verification solution to verify the actual age of your customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroWidget>

            <FullWidth bg={"white"}>
                <div className='py-6 md:py-10'>
                    <NewsTeller header />
                </div>
            </FullWidth>

        </LandingTemplate>
    )
}

export default KYC
