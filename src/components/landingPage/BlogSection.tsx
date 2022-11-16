import React from 'react'
import blogPics from "../../assets/image/blog-pics.png" 
import detectPics from "../../assets/image/detect 1.png"
import googleAds from "../../assets/image/google-ads.png"
import mailchimp from "../../assets/image/mailchimp.png"
import blogcontent from "../../assets/image/blog-content.png"

interface Props {
  header: String,
  showLandingInfo: Boolean
}

const BlogSection: React.FC<Props> = (props: Props) => {
    const {header, showLandingInfo} = props

    return (
        <div className='blog-post-section flex flex-wrap justify-center py-10 pb-20 md:pt-20'>
           <h2 className={`gotham py-4 w-11/12 md:w-9/12 ${ showLandingInfo? 'text-center' : ''}`}>{header}</h2>
           <div className='w-11/12 md:w-9/12 flex justify-center flex-wrap blog-post-container'>
               <div className='lg:w-4/12 sm:w-6/12 w-full py-3 blog-content-container'>
               <img alt='' src={googleAds} className='md:inline-block hidden absolute -top-[20px] -right-[20px]'></img>
               <img alt='' src={blogcontent} className='md:inline-block hidden absolute top-[30px] -left-[40px]'></img>
                  <img alt="" className='w-full' src={blogPics}></img>
                  <div className='garrif'>
                    <h5 className='gotham'>Identity Verification</h5>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia con</p>
                    <button> Read more › </button>
                  </div>
               </div>

               <div className='lg:w-4/12 sm:w-6/12 py-3 w-full blog-content-container'>
               <img alt='' src={mailchimp} className='md:inline-block hidden absolute top-[10px] right-0'></img>
                  <img alt="" className='w-full' src={blogPics}></img>
                  <div className='garrif'>
                    <h5 className='gotham'>Business Security</h5>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conAmet minim mollit non deserunt ullamco</p>
                    <button> Read more › </button>
                  </div>
               </div>

               <div className='lg:w-4/12 sm:w-6/12 py-3 w-full blog-content-container'>
                <img alt='' src={detectPics} className='md:inline-block hidden absolute -top-[40px] right-0'></img>

                  <img alt="" className='w-full' src={blogPics}></img>
                  <div className='garrif'>
                    <h5 className='gotham'>Anti Money Laundry</h5>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conAmet minim mollit</p>
                    <button> Read more › </button>
                  </div>
               </div>
           </div>


           {
           showLandingInfo && <div className='w-11/12 md:w-9/12 flex md:justify-end flex-wrap '>
               <div className='inline-block garrif px-6'>
                <div className='block md:inline-block md:mr-3 text-[17px] font-normal text-gray-400 mt-4'>SoftPASS is much more than just an identity verification</div>
                <button className='get-button mt-4'>See all articles</button>
                </div>
           </div>
          }
        </div>
    )
}

export default BlogSection
