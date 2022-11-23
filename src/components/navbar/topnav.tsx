import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { topNavRoute } from '../../constanst/topNavRout'
import routes from '../../navigation/Routes'
import ArrowDown from '../svg-icons/ArrowDown'
import Navicon from '../svg-icons/Navicon'
import SoftpassLogo from '../svg-icons/SoftpassLogo'
import DropDownContent from './components/DropDownContent'
interface Props { }

function Topnav(props: Props) {
  const { } = props

  //Variables
  const [showNav, setshowNav] = useState(true)

  const [activeNav, setActiveNav] = useState(-1)

  const [showContactUs, setshowContactUs] = useState(false)

  {
    /* <ArrowDown width='9' color='#E12179'/> */
  }

  //Function
  const navMouseLaeves = () => {
    if (!(window.innerWidth > 768)) return
    setTimeout(() => {
      setActiveNav(-1)
    }, 1000)
  }
  const activeNavHover = (val: number) => {
    if (!(window.innerWidth > 768)) return
    setActiveNav(val)
  }
  const activeNavClick = (val: number) => {
    if (window.innerWidth > 768) return
    setActiveNav(val == activeNav ? -1 : val)
  }

  return (
    <>
      

      <nav className=" bg-white flex flex-wrap w-full items-center px-2 lg:px-16 md:px-4 garrif md: fixed shadow-lg z-10  top-0 left-0 ">
        <div className="md:w-3/12 w-full flex relative px-2 py-3">
          <NavLink to="/">
            <SoftpassLogo width={'140'} height={'37'} />
          </NavLink>
          <span
            className="md:hidden inline-block absolute -translate-y-[20%] right-2 top-[25px] cursor-pointer"
            onClick={() => {
              setshowNav(!showNav)
            }}
          >
            {showNav ? (
              <Navicon width={'20'} color={'red'} />
            ) : (
              <span className="text-[40px] relative -top-[12px] opacity-50">
                &times;
              </span>
            )}
          </span>
        </div>

        <div
          className={`md:w-9/12 w-full flex flex-wrap 
       ${showNav ? 'hidden md:flex' : 'flex'}
       `}
        >
          <div
            onMouseLeave={() => {
              navMouseLaeves()
            }}
            className="md:w-9/12 lg:w-8/12 w-full md:h-full h-[70Vh] overflow-y-scroll md:overflow-y-visible md:flex block pointer flex-wrap items-center
           
           "
          >
            {topNavRoute.map((item, index) => {
              return (
                <div
                  className="md:w-[100px] md:h-[60px] lg:w-[120px] xl:w-[140px] w-full inline-flex flex-wrap items-center md:px-0 md:py-0 py-2 px-2 md:flex md:items-center nav-main-link"
                  key={item.name}
                  onMouseMove={() => {
                    activeNavHover(index)
                  }}
                  onClick={() => {
                    activeNavClick(index)
                  }}
                >
                  <div className="flex w-full items-center ">
                    <span className="md:w-auto w-[calc(100%-40px)] inline-block whitespace-nowrap text-[17px] font-semibold  ">
                      {item.name}
                    </span>
                    <i className="mt-[5px] ml-1 w-[40px] inline-flex item-center">
                      <i className="arrow-icon inline-block">
                        <ArrowDown width="9" color="#000" />
                      </i>
                    </i>
                  </div>
                  {activeNav == index && (
                    <DropDownContent item={item} dropdownContent={{}} />
                  )}
                </div>
              )
            })}
          </div>

          <div className="md:w-3/12  lg:w-4/12 w-full md:flex block  flex-wrap justify-center items-center">
            <div className="text-center">
              <span className="md:inline-block hidden md:px-3 lg:px-5">
                <NavLink to="/login">Login</NavLink>
              </span>
              <NavLink
                to={routes.register}
                className="md:w-[120px] w-[100%] md:px-5 px-12 py-3 text-[13px] font-semibold bg-softpasspurple-300 text-white rounded-lg shadow-lg hover-btn"
              >
                Get Started
              </NavLink>
            </div>
            <div className="w-full md:hidden text-[17px] text-center py-4">
              Existing customer?{' '}
              <span className="text-softpasspurple-300">Log in</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Topnav