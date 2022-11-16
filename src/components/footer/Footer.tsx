import { useNavigate } from "react-router-dom"
import softPass from "../../assets/image/SoftPASS.png"
import { topNavRoute } from '../../constanst/topNavRout'
import Facebookicon from '../svg-icons/Facebookicon'
import InstagramIcon from '../svg-icons/InstagramIcon'
import TwitterIcon from '../svg-icons/TwitterIcon'
import HeroWidget from '../widget/HeroWidget'





interface Props { }

function Footer(props: Props) {
    const { } = props

    const navigation = useNavigate()

    



    return (
        <HeroWidget>
            <div className='footer-container py-8 pb-12 border-b-[1px] border-gray-200'>
                <div className='w-6/12'><img alt='' src={softPass}></img></div>
                <div className='w-6/12 flex justify-end items-center'>
                    <i className='cursor-pointer'><Facebookicon width='22' /></i>  &nbsp; &nbsp;
                    <i className='cursor-pointer'><InstagramIcon width='22' /></i>  &nbsp;  &nbsp;
                    <i className='cursor-pointer'><TwitterIcon width='22' /></i>  &nbsp;  &nbsp;
                </div>
            </div>

            <div className='footer-container flex-wrap mt-10'>


            {
                topNavRoute.map((item, index) => {
                    return (
                        <div className='footer-link-container'>
                            <b>{item.name}</b>
                            <ul>
                                {
                                    item?.subRoutes.map((item) => {
                                        return (
                                            <li onClick={() => navigation(item.route)} className="pointer"> {item.title}</li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    )
                })
            }

          
         

                <div className='pt-12 pb-8 w-full text-center'>
                    <span className='copyright-text'>© 2022 SoftPass, Inc.</span>
                </div>
                <br></br><br></br>
            </div>

        </HeroWidget>
    )
}

export default Footer
