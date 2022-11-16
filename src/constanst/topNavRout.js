import { ReactComponent as TCareer } from '../assets/svg/career.svg';
import { ReactComponent as TCustomer } from '../assets/svg/tcustomer.svg';
import { ReactComponent as TUserDetail } from '../assets/svg/tuser-detail.svg';
import { ReactComponent as TAbout } from '../assets/svg/t_about.svg';
import { ReactComponent as TBlog } from '../assets/svg/t_blog.svg';
import { ReactComponent as Tbuger } from '../assets/svg/t_buger.svg';
import { ReactComponent as TContact } from '../assets/svg/t_contact.svg';
import { ReactComponent as TFile } from '../assets/svg/t_file.svg';
import { ReactComponent as TFiger } from '../assets/svg/t_finger.svg';
import { ReactComponent as TSdk } from '../assets/svg/t_sdk.svg';
import { ReactComponent as TSim } from '../assets/svg/t_sim.svg';
import { ReactComponent as TBusiness } from '../assets/svg/t_strike.svg';
import { ReactComponent as TWallet } from '../assets/svg/t_wallet.svg';


export const topNavRoute = [
    {
        name:'Products',
        link: '/products',
        subRoutes:[
            {
                Image:Tbuger,
                title:'KYC Identity verification',
                content:"Verify your customer information within seconds BVN, NIN, NUBAN Check, Bulk BVN, Bulk NIN, International Passport, Voter’s card Verification, Driver’s License",
                route: '/kyc'
            },
            {
                Image:TFiger,
                title:'Facial Verification:',
                content:"Adopt our AI-powered facial \n biometric solution to verify facial identities: Liveness Check OCR for businesses",
                route: '/facial-verification'
            },
            {
                route: '/aml',
                Image:TWallet,
                title:'AML for Businesses',
                content:"Guarantee AML compliance for your business  "
            },
            {
                route: '/kyc',
                Image:TCustomer,
                title:'Customer Information',
                content:"Confirm the authenticity and accuracy of information provided by their customers in multiple ways",
                scrollCustomer:true
            },
            {
                route: '/kyc',
                Image:TBusiness,
                title:'Business Verification',
                content:" Establish the legitimacy of your customers business identities by verifying their credentials in real-time"
            },

        ]
      },
      {
        name:'Use Cases',
        link: '/use-cases',
        subRoutes:[
            
            {
                route: '/customer-onboarding',
                Image:Tbuger,
                title:'Customer Onboarding:',
                content:"With the Integration of a single API, Softpass helps businesses complete their customer onboarding process seamlessly by verifying their data swiftly"
            },
            {
                route: '/kyc-crypto',
                Image:TFiger,
                title:'KYC for crypto:',
                content:"Meet KYC and AML compliance for your customers by seamlessly verifying customer identity information"
            },
            {
                route: '/kyc-driver',
                Image:TWallet,
                title:'KYC for Drivers:',
                content:"Uphold your business integrity and amble trust by verifying staff identity to help mitigate business risks "
            },
            {
                route: '/sim-registration',
                Image:TSim,
                title:'Sim Registration:',
                content:"Verify your basic customer information to help Fastrack sim registration across locations"
            },
            {
                route: '/age-verification',
                Image:TUserDetail,
                title:'Age Verification:',
                content:"Verify the DOB of your customers by integrating with our reliable and swift API "
            },
        ]
      },
      {
        name:'Developer',
        link: '/developer',
        subRoutes:[
            {
                route: '/kyc',
                Image:TFile,
                title:'API DOCUMENTATION',
                content:"View all developer documentations"
            },
            {
                route: '/kyc',
                Image:TSdk,
                title:'SDKS',
                content:"View all developer documentations"
            },
        ]
      },
      {
        name:'Company',
        link: '/company',
        subRoutes:[
            {
                route: '/about-us',
                Image:TAbout,
                title:'ABOUT US',
                content:"Softpass is a Digital enterprise-based Identity verification Platform driven by business needs to help businesses verify user identities and credentials using technology."
            },
            {
                route: '/contact-us',
                Image:TContact,
                title:'CONTACT US:',
                content:"Email: enquiries@softpass.net Phone Number: 07026356742"
            },
            {
                route: '/blog',
                Image:TBlog,
                title:'BLOG',
                content:"Amet minim mollit non deserunt ullamco est sit aliqua dolor "
            },
            {
                route: '/kyc',
                Image:TCareer,
                title:'CAREERS',
                content:"Amet minim mollit non deserunt ullamco est sit aliqua dolor "
            },

        ]
      }
]