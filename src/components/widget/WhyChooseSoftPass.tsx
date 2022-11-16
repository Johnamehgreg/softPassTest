import React, { useState } from 'react'
import dashboard2 from '../../assets/svg/external-Encryption-hacker-attack-others-papa-vector.png'
import dashboard3 from '../../assets/svg/integration.png'
import dashboard1 from '../../assets/svg/security-pass.png'
import ScanIcon from '../svg-icons/ScanIcon'
import SecuritySafeIcon from '../svg-icons/SecuritySafeIcon'
// import CircleBreakIcon from '../svg-icons/CircleBreakIcon'

interface Props { }

const WhyChooseSoftPass: React.FC<Props> = (props: Props) => {
  const { } = props

  const [tab, settab] = useState<number>(1)
  return (
    <article className="mid-nav-article">
      <h2 className="mt-16"> Why choose SoftPass? </h2>
      <div className="mid-landing-nav">
        {/* <button onClick={() => settab(1) }  className={tab === 1 ? "mid-active-link" : ""}>
            <i className="relative top-[2px]">
              <CircleBreakIcon width="24" color="#7218D8" />
            </i>
            &nbsp; Fast Verification
          </button> */}
        <button className={tab === 1 ? "mid-active-link" : ""} onClick={() => settab(1)}  >
          <i className="relative top-[2px]">
            <SecuritySafeIcon width="24" color="#F3A6C9" />
          </i>
          &nbsp; Fast Verification
        </button>
        <button className={tab === 2 ? "mid-active-link" : ""} onClick={() => settab(2)}  >
          <i className="relative top-[2px]">
            <SecuritySafeIcon width="24" color="#F3A6C9" />
          </i>
          &nbsp; End to end Encryption
        </button>
        <button className={tab === 3 ? "mid-active-link" : ""} onClick={() => settab(3)}  >
          <i className="relative top-[2px]">
            <ScanIcon width="24" color="#F3A6C9" />
          </i>
          &nbsp; Seamless Integration
        </button>
      </div>

      <div className="w-full flex flex-wrap why-pass-container md:py-16">

        {
          tab === 1 && (
            <>
              <div className="hidden md:block">
                <img
                  alt="design-dashboard"
                  width="100%"
                  className='md:pr-8'
                  // src={dashboardFrame}
                  src={dashboard1}
                ></img>
              </div>

              <div className="article-indentity">
                <h1>FAST VERIFICATION</h1>
                <p>
                  Softpass provides lightning fast onboarding experience for your
                  customers while protecting from identity
                  fraud through automatic identity verification
                </p>
                <button className="get-button">GET STARTED</button>
              </div>
            </>

          )
        }

        {
          tab === 2 && (
            <>
              <div className="hidden md:block">
                <img
                  alt="design-dashboard"
                  width="100%"
                  className='md:pr-8'
                  // src={dashboardFrame}
                  src={dashboard2}
                ></img>
              </div>
              <div className="article-indentity">
                <h1>END-TO-END ENCRYPTION</h1>
                <p>
                  Secure your company’s networks from threats
                  and forget all your Data Privacy concerns with our highly secure solutions
                </p>
                <button className="get-button">GET STARTED</button>
              </div>

            </>
          )
        }
        {
          tab === 3 && (

            <>

              <div className="hidden md:block">
                <img
                  alt="design-dashboard"
                  width="100%"
                  className='md:pr-8'
                  // src={dashboardFrame}
                  src={dashboard3}
                ></img>
              </div>
              <div className="article-indentity">
                <h1>SEAMLESS INTEGRATION</h1>
                <p>
                  With Softpass, you can be sure to experience an easy
                  to use and seamless integration process to simplify
                  the development process without a complex integration mechanism
                </p>
                <button className="get-button">GET STARTED</button>
              </div>


            </>
          )
        }
      </div>
    </article>
  )
}

export default WhyChooseSoftPass
