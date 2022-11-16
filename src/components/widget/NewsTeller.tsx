import React from 'react'

interface Props {
    header?: String | Boolean
}

function NewsTeller(props: Props) {
    const { header } = props

    return (
        <div className='w-full newsteller-container'>
           <span className={`w-full block text-[15px] text-left xs:text-center pt-2 ${header ? 'text-softpasspurple-300' : 'text-gray-500'}`}>Newsletter</span>
           <h2 className='text-[25px] text-left xs:text-center py-3 font-extrabold w-full'>What's the latest with SoftPass? </h2>
           <p className='w-full block text-left xs:text-center text-[12px] font-[200]'>Sign up for our email newsletter to get exclusive updates,<br></br> new services and industry trends</p>

           <form>
                <div>
                    <input placeholder='Your Email' type='email'></input>
                    <button>Subscribe</button>
                </div>
           </form>
        </div>
    )
}

export default NewsTeller
