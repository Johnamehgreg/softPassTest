import React, { useState } from 'react'
import BankIcon from '../../components/svg-icons/BankIcon'
import FintechIcon from '../../components/svg-icons/FintechIcon'
import CryptoIcon from '../../components/svg-icons/CryptoIcon'
import MarketPlaceIcon from '../../components/svg-icons/MarketPlaceIcon'
import PaymentIcon from '../../components/svg-icons/PaymentIcon'
import InsuranceIcon from '../../components/svg-icons/InsuranceIcon'

interface Props {}

 const TargetedIndustry: React.FC<Props> = (props: Props)=>{
  const {} = props

  //vAriables
  const [iconwidth, setIconWIdth] = useState('42')
  const [industries, setIndustries] = useState([
    {
      icon: <BankIcon width={iconwidth} />,
      title: 'Banking',
      discriptrion:
        'Verify your customer identities to ensure your customers are who they claim to be ',
    },
    {
      icon: <FintechIcon width={iconwidth} />,
      title: 'Fintechs',
      discriptrion:
        "Ensure the safety of their customers' personal data and mitigates fraud cases and non-compliance penalties.",
    },
    {
      icon: <CryptoIcon width={iconwidth} />,
      title: 'Cryptocurrency',
      discriptrion:
        "Take a proactive approach to regulatory rules and laws to secure the safety of your customers' financial data with SoftPass.",
    },
    {
      icon: <InsuranceIcon width={iconwidth} />,
      title: 'Insurance',
      discriptrion:
        'SoftPass helps you to deliver a friction-less customer experience, especially for KYC to assess potential risks and verify the identity of your clients.',
    },
    {
      icon: <PaymentIcon width={iconwidth} />,
      title: 'Payments',
      discriptrion:
        'Payment processing companies need a robust and reliable digital verification system to help them accurately and swiftly confirm the identity of their customers. SoftPass is a trusted partner to help secure their online transactions.',
    },
    {
      icon: <MarketPlaceIcon width={iconwidth} />,
      title: 'Online Martketplaces',
      discriptrion:
        'With the widespread popularity of eCommerce channels and platforms, it is important for businesses to adopt a trusted and secure identity verification technology to prevent fraud and reduce chargebacks. ',
    },
  ])
  return (
    <article className="text-sm">
      <div className="flex justify-center text-center flex-wrap w-full py-8 px-3">
        <h3 className="font-bold text-[17px] garrif w-full py-8">
          Our targeted Industries
        </h3>
        <div className="flex flex-wrap justify-center w-full">
          {industries.map((item: any, index: number) => {
            return (
              <div className="industries-card">
                {item.icon}
                <h5>{item.title}</h5>
                <p>{item.discriptrion}</p>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default TargetedIndustry
