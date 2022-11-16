import React from 'react'
import HeroWidget from '../../components/widget/HeroWidget'
import LandingTemplate from '../../layouts/HomeLayout/LandingTemplate'
import FullWidth from '../../components/widget/FullWidth'
import TrustedPartners from '../../components/widget/TrustedPartners'
import NewsTeller from '../../components/widget/NewsTeller'
import TargetedIndustry from '../../components/landingPage/TargetedIndustry'
import ApiDocumentation from '../../components/landingPage/ApiDocumentation'
import ShieldCheckIcon from '../../components/svg-icons/ShieldCheckIcon'
import WhyChooseSoftPass from '../../components/widget/WhyChooseSoftPass'
import SvgGallery from '../../components/widget/SvgGallery'
import BlogContainer from '../../components/blog/BlogContainer'

interface Props {}

function Blog(props: Props) {
    const {} = props

    return (
       <LandingTemplate>
           <FullWidth bg={'white'}>
            <BlogContainer header="Blog" showLandingInfo={false}/>     
            </FullWidth>
            <br></br>
            <br></br>
            <br></br>
       </LandingTemplate>
    )
}

export default Blog
