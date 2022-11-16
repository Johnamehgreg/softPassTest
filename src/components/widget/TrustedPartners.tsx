import React from 'react'
import shareBantai from "../../assets/image/share-banta.svg"
import paystack from "../../assets/image/paystack.svg"
import ProvidousIcon from '../svg-icons/ProvidousIcon'

interface Props {}

function TrustedPartners(props: Props) {
    const {} = props

    return (
        <div className='trusted-section'>
            <h3>Trusted Partners:</h3>
            <div>
                <div> <img alt="" src={shareBantai} width='60'/>&nbsp;Sharebanta</div>
                <div> <ProvidousIcon width='50'/> &nbsp; Providus Bank</div>
                <div> <img alt="" src={paystack} width='50'/> &nbsp; Paystack</div>
            </div>
       </div>
    )
}

export default TrustedPartners
