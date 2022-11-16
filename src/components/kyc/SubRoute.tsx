import React from 'react'
import VerificationIcon from '../svg-icons/VerificationIcon'

interface Props {}

function SubRoute(props: Props) {
    const {} = props

    return (
        <div className='bg-white flex flex-wrap justify-center items-center py-12 max-softpass-width md:rounded-2xl relative md:-top-[100px]'>
        <div className='w-11/12 md:w-5/12 order-2 md:order-1'>
            <div className='w-full flex md:flex-wrap my-8'>
                <div className='mid-section-link'><span></span> <b>Identity verification (KYC) Customer</b></div>
                <div className='mid-section-link'><span></span> <b>Customer Information Verification</b></div>
                <div className='mid-section-link'><span></span> <b>Business Verification (KYB)</b></div>
                <div className='mid-section-link'><span></span> <b>AML Service</b></div>
                <div className='mid-section-link'><span></span> <b>Facial Verification</b></div>
            </div>
        </div>
        <div className='w-11/12 md:w-5/12 garrif order-1 md:order-2'>
            <div className='shadow-xl p-4 md:p-10 rounded-lg'>
               <div><VerificationIcon width={'40'}/> </div>
               <h3 className='text-[19px] font-bold my-4 mt-6'>Identity verification (KYC)</h3>
               <hr className='bg-red-500 w-20 h-[3px] my-3'></hr>
               <p className='text-[13px] leading-4'>Our identity APIs help you establish the legitimacy of your customer identities by verifying their credentials in real-time.
                <b className='block text-softpasspurple-300 py-3'>Identity Verification Services Include;</b>
                <b className="text-softpasspurple-300">BVN:</b> Uniquely verify the identities of your customers using their BVN for KYC compliance<br></br><br></br>
                <b className="text-softpasspurple-300">NIN:</b> Authenticate the identities of people using their National Identity Numbers to ensure they are who they claim to be.<br></br><br></br>
                <b className="text-softpasspurple-300">Bulk BVN:</b> Verify your customer identities in bulk. Upload a list of numbers and get your bulk verification done in 3 clicks.<br></br><br></br>
                <b className="text-softpasspurple-300">Bulk NIN:</b> Verify your customer identities in bulk. Upload a list of numbers and get your bulk verification done in 3 clicks.<br></br><br></br>
                <b className="text-softpasspurple-300">International Passport:</b> Verify the identities of your customers remotely and certify their authenticity in real time using our NIP service.<br></br><br></br>
                <b className="text-softpasspurple-300">Voter’s card Verification:</b> Confirm an identity by validating their PVCs <br></br><br></br>
                <b className="text-softpasspurple-300">Driver’s License:</b> Receive real-time information about your customers by validating the authenticity of their drivers license  </p>
            </div>
        </div>
    </div>
    )
}

export default SubRoute
