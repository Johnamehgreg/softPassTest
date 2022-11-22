import { useState } from 'react'
import VerificationIcon from '../svg-icons/VerificationIcon'

interface Props { }


function SubRoute(props: Props) {
    const { } = props

    const [tab, settab] = useState(0)

    const checkCurrent = (index:number) => {
        if(index <= tab) return 'mid-section-link-active'
    }





    return (
        <div className='bg-white flex flex-wrap justify-center items-center py-12 max-softpass-width md:rounded-2xl relative md:-top-[100px]'>
            <div className='w-11/12 md:w-5/12 order-2 md:order-1'>
                <div className='w-full flex md:flex-wrap my-8'>
                    {
                        list.map((item: any, index:number) => {
                            return (
                                <div className={`mid-section-link ${checkCurrent(index)}`}>
                                    <span></span> 
                                    <b
                                    onClick={() => settab(index)}
                                     className='pointer'>{item?.name}</b>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-11/12 md:w-5/12 garrif order-1 md:order-2'>
                <div className='shadow-xl p-4 md:p-10 rounded-lg'>
                    <div><VerificationIcon width={'40'} /> </div>
                   
                    <h3 className='text-[19px] font-bold my-4 mt-6'>{list[tab].name}</h3>
                    <hr className='bg-red-500 w-20 h-[3px] my-3'></hr>
                    {/* <p className='text-[13px] leading-4'>Our identity APIs help you establish the legitimacy of your customer identities by verifying their credentials in real-time. */}
                    {
                        list[tab].item.map((item:any) => {
                            return (
                                <p className='text-[13px] mb-4 leading-4'><b className="text-softpasspurple-300">{item?.title}:</b> {item?.message} </p>
                            )
                        })
                    }
                        {/* <b className='block text-softpasspurple-300 py-3'>Identity Verification Services Include;</b>
                        <b className="text-softpasspurple-300">BVN:</b> Uniquely verify the identities of your customers using their BVN for KYC compliance<br></br><br></br>
                        <b className="text-softpasspurple-300">NIN:</b> Authenticate the identities of people using their National Identity Numbers to ensure they are who they claim to be.<br></br><br></br>
                        <b className="text-softpasspurple-300">Bulk BVN:</b> Verify your customer identities in bulk. Upload a list of numbers and get your bulk verification done in 3 clicks.<br></br><br></br>
                        <b className="text-softpasspurple-300">Bulk NIN:</b> Verify your customer identities in bulk. Upload a list of numbers and get your bulk verification done in 3 clicks.<br></br><br></br>
                        <b className="text-softpasspurple-300">International Passport:</b> Verify the identities of your customers remotely and certify their authenticity in real time using our NIP service.<br></br><br></br>
                        <b className="text-softpasspurple-300">Voter’s card Verification:</b> Confirm an identity by validating their PVCs <br></br><br></br>

                        */}
                </div>
            </div>
        </div>
    )
}


let list = [
    {
        name: 'Identity verification (KYC) Customer',
        item: [
            {
                title: 'BVN',
                message: 'Uniquely verify the identities of your customers using their BVN for KYC compliance'
            },
            {
                title: 'NIN',
                message: 'Authenticate the identities of people using their National Identity Numbers to ensure they are who they claim to be.'
            },
            // {
            //     title: 'Bulk BVN',
            //     message: 'Verify your customer identities in bulk. Upload a list of numbers and get your bulk verification done in 3 clicks.'
            // },

            {
                title: 'International Passport',
                message: 'Verify the identities of your customers remotely and certify their authenticity in real time using our NIP service.'
            },

            {
                title: 'Voter’s card Verification',
                message: 'Confirm an identity by validating their PVCs'
            },

            {
                title: 'Driver’s License',
                message: 'Receive real-time information about your customers by validating the authenticity of their drivers license'
            },


        ]
    },
    {
        name: 'Customer Information Verification',
        item: [
            {
                title: 'PHONE NUMBER VERIFICATION',
                message: 'Verify the authenticity of mobile numbers using our phone number verification service. Confirm carrier, location, and validity of any phone number'
            },
            
            {
                title: 'Bank Account Verification (NUBAN)',
                message: 'Our NUBAN lookup service allows you to verify any Nigerian bank account number easily'
            },
            {
                title: 'Age verification',
                message: 'Adopt our customer verification solution to verify the actual age of your customers'
            },


        ]
    },

    {
        name: 'Business Verification',
        item: [
            {
                title: 'CAC Basic Verification',
                message: 'Get the basic details about any business in Nigeria by verifying their RC numbers'
            },
            {
                title: 'CAC Advanced Verification',
                message: 'Get advanced details about any business in Nigeria by verifying their RC numbers'
            },

        ]
    },
    {
        name: 'ANTI-MONEY LAUNDERING',
        item: [
            {
                title: 'AML Service',
                message: 'Fulfil your AML compliance requirements by leveraging our AI-based systems that compare customer selfies with uploaded IDs.'
            },
            

        ]
    },
    {
        name: 'Facial Verification',
        item: [
            {
                title: 'Liveness Check',
                message: 'Our liveness detection technology helps to direct a user to perform a series of actions in order to detect their presence. It captures, analyzes, and compares patterns based on the person’s facial details'
            },
            {
                title: 'OCR',
                message: 'Completely automate the verification of customer credentials and documents by converting all information on any ID into text which can then be validated. Completely time and cost-efficient'
            },

        ]
    },

]

export default SubRoute
