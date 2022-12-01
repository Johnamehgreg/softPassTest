import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';
import routes from "../../navigation/Routes";




const Article = () => {

    const { ref, inView } = useInView();

    const ani1 = useAnimation()
    const ani2 = useAnimation()
    const ani3 = useAnimation()
    const ani4 = useAnimation()
    const navigation = useNavigate()



    useEffect(() => {

        if (inView) {
            ani1.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        } else {
            ani1.start({
                x: '-100vw'
            })
        }
        if (inView) {
            ani2.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 0.6,
                    bounce: 0.3
                }
            })
        } else {
            ani2.start({
                x: '-100vw'
            })
        }
        if (inView) {
            ani3.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 0.9,
                    bounce: 0.3
                }
            })
        } else {
            ani3.start({
                x: '-100vw'
            })
        }
        if (inView) {
            ani4.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1.2,
                    bounce: 0.3
                }
            })
        } else {
            ani4.start({
                x: '-100vw'
            })
        }
    }, [inView])



    return (
        <article className="landing-article">
            <h2>Instantly verify, Stay compliant</h2>
            <div className="w-full flex justify-center items-center flex-wrap">
                <div className="md:w-5/12 w-full">
                    <p className="pb-3">
                        Our services help you verify customer identities, gain deeper
                        insights about users/businesses, detect and prevent fraud.
                    </p>
                    <ul ref={ref} className="landing-list">
                        <motion.li


                            animate={ani1}
                        >
                            Authentication made easy for businesses to verify the
                            identity of online customers
                        </motion.li>

                        <motion.li


                            animate={ani2}
                        >
                            Softpass enables companies to identify and take action
                            against fraudulent behavior within their business.{' '}
                        </motion.li>


                        <motion.li


                            animate={ani3}
                        >
                            We provide trusted real-time verification data for your
                            applications, helping you build a fraud-free ecosystem.{' '}
                        </motion.li>


                        <motion.li


                            animate={ani4}
                        >
                            Our authentic products help you verify, gain deeper insights
                            about users/businesses, detect and prevent fraud.
                        </motion.li>


                    </ul>
                    <div className="w-full">
                        <button onClick={() => navigation(routes.contactUs)} className="get-button">GET IN TOUCH</button>
                    </div>
                </div>
                <div className="md:w-5/12 w-full">
                    <img
                        alt="design-dashboard"
                        width="100%"
                        src={'https://res.cloudinary.com/softpass/image/upload/v1667388239/slider_h41kjb.gif'}
                    ></img>
                </div>
            </div>
        </article>
    )
}

export default Article
