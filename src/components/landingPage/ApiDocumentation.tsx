import React from 'react'
import codeEditor from "../../assets/image/code-editor.png"
import Edictor from '../edictor'

interface Props {}

const  ApiDocumentation: React.FC<Props> = (props: Props)=> {
    const {} = props

    return (
    <div className=' api-doc-container py-5 '>
        <div className='w-full md:w-6/12'>
          <h1 className='text-4xl font-bold gotham mb-10 text-white'>API DOCUMENTATION</h1>
          <p className='text-white gotham text-2 mb-10'>Get access to our developer documentation to get <br/> started to integrating with SoftPass on your platform</p>
          <button className='no-arrow-button'>Explore more</button>
        </div>
        <div className='w-full md:w-6/12 flex justify-center item-center'>
        
         <Edictor />
        </div>
    </div>
    )
}

export default ApiDocumentation
