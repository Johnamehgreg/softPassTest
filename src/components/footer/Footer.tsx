import React from 'react'
import HeroWidget from '../widget/HeroWidget'
import softPass from "../../assets/image/SoftPASS.png"
import Facebookicon from '../svg-icons/Facebookicon'
import InstagramIcon from '../svg-icons/InstagramIcon'
import TwitterIcon from '../svg-icons/TwitterIcon'

interface Props {}

function Footer(props: Props) {
    const {} = props

    return (
        <HeroWidget>
          <div className='footer-container py-8 pb-12 border-b-[1px] border-gray-200'>
            <div className='w-6/12'><img alt='' src={softPass}></img></div>
            <div  className='w-6/12 flex justify-end items-center'>
                <i className='cursor-pointer'><Facebookicon width='22'/></i>  &nbsp; &nbsp;  
                <i className='cursor-pointer'><InstagramIcon width='22'/></i>  &nbsp;  &nbsp; 
                <i className='cursor-pointer'><TwitterIcon width='22'/></i>  &nbsp;  &nbsp; 
            </div>
          </div>

          <div className='footer-container flex-wrap mt-10'>
            
            <div className='footer-link-container'>
                <b>Products</b>
                <ul>
                    <li>KYC Identity verification</li>
                    <li>Facial Verification</li>
                    <li>Customer Information</li>
                    <li>AML for Business</li>
                    <li>Business Verification</li>
                </ul>
            </div>

            <div className='footer-link-container'>
                <b>Use Cases</b>
                <ul>
                    <li>Customer Onboarding</li>
                    <li>KYC for crypto</li>
                    <li>KYC for Drivers</li>
                    <li>Sim Registration</li>
                    <li>Age Verification</li>
                </ul>
            </div>

            <div className='footer-link-container'>
                <b>Developer</b>
                <ul>
                    <li>API Documentation</li>
                    <li>SDKS</li>
                </ul>
            </div>

            <div className='footer-link-container'>
                <b>Company</b>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
            
            <div className='pt-12 pb-8 w-full text-center'>
                <span className='copyright-text'>© 2022 SoftPass, Inc.</span>
            </div>
            <br></br><br></br>
          </div>

        </HeroWidget>
    )
}

export default Footer
