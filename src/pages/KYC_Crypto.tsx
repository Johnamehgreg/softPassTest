import dataSecurity from '../assets/image/Data_security.png'
import ApiDocumentation from '../components/landingPage/ApiDocumentation'
import TargetedIndustry from '../components/landingPage/TargetedIndustry'
import FullWidth from '../components/widget/FullWidth'
import HeroWidget from '../components/widget/HeroWidget'
import NewsTeller from '../components/widget/NewsTeller'
import TrustedPartners from '../components/widget/TrustedPartners'
import LandingTemplate from '../layouts/HomeLayout/LandingTemplate'

interface Props {}

function KYC_Crypto(props: Props) {
    const {} = props

    return (
       <LandingTemplate>
          <HeroWidget>
                <div className='py-16 text-white w-full'>
                    <h1 className='text-[42px] gotham font-bold text-center'>KYC for Crypto</h1>
                   <div className='garrif text-[14px] flex justify-center'> 
                       <p className='w-11/12 sm:w-[450px] text-center opacity-70'>Meet KYC and AML compliance for your customers 
                        by seamlessly verifying customer 
                        identity information
                        </p>
                    </div>
                    <div className='w-full md:left-0 relative -left-[calc(50%-50px)] flex justify-center min-w-[700px] '>
                        <img src='https://res.cloudinary.com/softpass/image/upload/v1667477313/crypto-bitcoin_bqfgvy.svg' alt="" className='w-11/12'></img>
                    </div>
                </div>
          </HeroWidget>

          <FullWidth bg="white">
            <div className="bg-white max-softpass-width md:rounded-2xl relative md:-top-[100px]">
                <TrustedPartners />
            </div>
        </FullWidth>
         

        <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[00px] pt-2 pb-[50px] md:pb-[80px] justify-between items-center">
          <div className="sm:w-5/12 w-full  text-black md:pr-3 pt-6">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
                    Meet complaince with one integration
            </h1>
            <p className='text-[15px] pt-2'>
                Carry out identity and background checks on your<br></br> clients to guarantee the security of your platform.
            </p>
         
          </div>
          <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6">
            {/* <Compliance/> */}
            <img alt="" src='https://res.cloudinary.com/softpass/image/upload/v1667477306/complaince_axayeg.svg' className="rounded-2xl"></img>
          </div>
        </div>
      </FullWidth>

      <FullWidth bg={'white'}>
        <div className="flex flex-wrap max-softpass-width md:pt-[50px] pt-20 pb-[50px] md:pb-[120px] justify-between items-center">
        <div className="sm:w-6/12 w-full md:flex md:justify-end pt-6 order-2 md:order-1">
            <img alt="" src={dataSecurity} className="rounded-2xl"></img>
          </div>
          <div className="sm:w-5/12 w-full  text-black md:pl-8 pt-6 order-1 md:order-2">
            <h1 className='text-softpasspurple-300 capitalize text-[37px] font-bold gotham'>
                    Meet complaince with one integration
            </h1>
            <p className='text-[15px] pt-2'>
                Carry out identity and background checks on your<br></br> clients to guarantee the security of your platform.
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

export default KYC_Crypto
