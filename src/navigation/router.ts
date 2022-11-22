import routes from './Routes';
import stacks from './stack';

import AboutUs from '../pages/AboutUs';
import Age_Verification from '../pages/AgeVerification';
import AML from '../pages/AML';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/Blog/BlogDetails';
import ContactUs from '../pages/ContactUs';
import Costomer_Onboarding from '../pages/CostomerOnboarding';
import FacialVerification from '../pages/FacialVerification';
import ForgetPassword from '../pages/ForgetPassword';
import HomePage from '../pages/home/HomePage';
import Verification from '../pages/home/pages/Verification';
import KYC from '../pages/KYC';
import KYC_Crypto from '../pages/KYC_Crypto';
import KYC_Driver from '../pages/KYC_Driver';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import OTPSend from '../pages/OTPSend';
import OTPVerifyAccount from '../pages/OTPVerifyAccount';
import Register from '../pages/Register';
import Sim_Registration from '../pages/Sim_Registration';
import Wallet from "../pages/home/pages/Wallet.tsx"





const route = [
    // Landing Pages
    {
        stack: stacks.Landing,
        route: routes.landing,
        Page: LandingPage,
    },
    {
        stack: stacks.Landing,
        route: routes.kyc,
        Page: KYC,
    },
    {
        stack: stacks.Landing,
        route: routes.facialVerification,
        Page: FacialVerification,
    },
    {
        stack: stacks.Landing,
        route: routes.aboutUs,
        Page: AboutUs,
    },
    {
        stack: stacks.Landing,
        route: routes.contactUs,
        Page: ContactUs,
    },

    {
        stack: stacks.Landing,
        route: routes.aml,
        Page: AML,
    },
    {
        stack: stacks.Landing,
        route: routes.facialVerification,
        Page: FacialVerification,
    },
    {
        stack: stacks.Landing,
        route: routes.blog,
        Page: Blog,
    },
    {
        stack: stacks.Landing,
        route: routes.blogDetails,
        Page: BlogDetails,
    },



    //  auth Pages
 
    {
        stack:stacks.AUTH,
        route: routes.forgetPassword,
        Page:ForgetPassword,
    },
    {
        stack:stacks.AUTH,
        route: routes.KycCrypto,
        Page: KYC_Crypto,
    },
    {
        stack: stacks.AUTH,
        route: routes.simRegistration,
        Page: Sim_Registration,
    },

    {
        stack: stacks.AUTH,
        route: routes.kycDriver,
        Page: KYC_Driver,
    },
    {
        stack: stacks.AUTH,
        route: routes.customerOnboarding,
        Page: Costomer_Onboarding,
    },
    {
        stack: stacks.AUTH,
        route: routes.ageVerification,
        Page: Age_Verification,
    },
    {
        stack: stacks.AUTH,
        route: routes.login,
        Page: Login,
    },
    {
        stack: stacks.AUTH,
        route: routes.aml,
        Page: AML,
    },
    {
        stack: stacks.AUTH,
        route: routes.register,
        Page: Register,
    },
    {
        stack: stacks.AUTH,
        route: routes.authOtp,
        Page: OTPSend,
    },
    {
        stack: stacks.AUTH,
        route: routes.authOtpVerify,
        Page: OTPVerifyAccount,
    },


    // Home 

    {
        stack: stacks.APP,
        route: routes.home,
        Page: HomePage,   
    },
    {
        stack: stacks.APP,
        route: routes.verification,
        Page: Verification,   
    },

   



]


export default route

