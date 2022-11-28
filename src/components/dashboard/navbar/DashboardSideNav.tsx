import Cookies from 'js-cookie';
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../../assets/image/svg/ArrowDown.svg";
import { ReactComponent as DLogout } from "../../../assets/image/svg/logout.svg";
import { ReactComponent as DLogo } from "../../../assets/image/svg/softpassSVG 3.svg";
import { AuthProvider } from "../../../contextProvide/AuthContext";
import routes from '../../../navigation/Routes';
import { dashboardSideRoute } from "../dashboardSideRoute";
import SubNav from "./subNav";




interface Props {
  closeSidebar: boolean;
  closebarFunction: Function;
}

const DashboardSideNav: React.FC<Props> = (props: Props) => {
  const { closeSidebar, closebarFunction } = props;
  const navigation = useNavigate()

  //VARIABLES
  const [route, setRoute] = useState("Users");
  const [isDropdownActive, setIsDropDownActive] = useState(-1);
  const [activeSideContent, setActiveSideContent] = useState(-1);
  const [index, setindex] = useState(0)
  //FUNCTIONS
  const setNavigation = (val: string) => {
    setRoute(val);
  };
  const setIsDropDownActiveFunc = (val: number) => {
    isDropdownActive == -1 ? setIsDropDownActive(val) : setIsDropDownActive(-1);
  };

  const {setisUserLogin} = useContext(AuthProvider)



  const logout =  async() => {
    setisUserLogin(false)
    navigation(routes.landing)
    try{
      Cookies.remove('isLogin')
    }catch (e){
      
    }
    
  }
  

  return (
    <div
      className={`w-full side-nav-container  px-6 pt-6`}
    >
      <div className="w-full flex items-center">
        <div className="w-11/12">
          <DLogo />
        </div>
        <div className="md:hidden w-1/12 text-right text-[30px]">
          <span
            onClick={() => {
              closebarFunction(false);
            }}
            className="cursor-pointer"
          >
            &times;
          </span>
        </div>
      </div>
      <div className="mt-8">
        {dashboardSideRoute.map((item: any, index: number) => {
          const { Icon, route, name, subRoute } = item;
          return (
            <>
              {
                name === 'verification' ?

                  <div
                    onMouseLeave={() => {
                      setIsDropDownActive(-1)
                    }}
                    onMouseEnter={() => {
                      setActiveSideContent(index);
                      setIsDropDownActiveFunc(index);
                    }}
                    className="flex  flex-wrap py-1  inter">
                    <span
                      onClick={() => {
                        setActiveSideContent(index);
                        setIsDropDownActiveFunc(index);
                      }}


                      className={`flex w-full justify-between	pr-2 items-center py-2 px-1 rounded-md text-[13px] capitalize cursor-pointer
                       ${activeSideContent == index
                          ? " text-softpasspurple-300 scale-[1.1] transition duration-300 bg-softpasspurple-300/10"
                          : "transition duration-300"
                        }
              `}
                    >

                      <div className="flex items-center">
                        <Icon
                          width={"18"}
                          class={
                            activeSideContent == index
                              ? `side-nav-svg transition duration-300`
                              : "transition duration-300"
                          }
                        />
                        &nbsp; &nbsp; {item.name}

                      </div>
                      {item.subRoute?.length > 0 && (
                        <span
                          className={`ml-4 mt-1 inline-block transition ${isDropdownActive == index && activeSideContent == index
                            ? "rotate-180"
                            : "rotate-0"
                            }`}
                        >
                          <ArrowDown />
                        </span>
                      )}
                    </span>
                    {isDropdownActive == index && activeSideContent == index && (
                      <div className="pl-2">
                        {subRoute.map((item: any, iDEX: number) => {
                          return (
                            <span
                              onMouseEnter={() => {

                              }}
                              onClick={() => {
                                navigation(item?.route)
                                setindex(iDEX)
                                // setIsDropDownActiveFunc(-1);
                              }}
                              className="sub-route-item mt-2 relative"
                            >
                              {item?.subname}
                              {
                                item?.subRoute?.length > 0 && (
                                  <SubNav item={item?.subRoute} />
                                )
                              }

                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  :

                  <div className="flex flex-wrap py-1 inter">
                    <span
                      onClick={() => {

                        navigation(route)
                        setActiveSideContent(index);
                        setIsDropDownActiveFunc(index);
                      }}
                      className={`flex w-full items-center py-2 px-1 rounded-md text-[13px] capitalize cursor-pointer
            ${activeSideContent == index
                          ? " text-softpasspurple-300 scale-[1.1] transition duration-300 bg-softpasspurple-300/10"
                          : "transition duration-300"
                        }
            `}
                    >
                      <Icon
                        width={"18"}
                        class={
                          activeSideContent == index
                            ? `side-nav-svg transition duration-300`
                            : "transition duration-300"
                        }
                      />
                      &nbsp; &nbsp; {item.name}
                      {item.subRoute?.length > 0 && (
                        <span
                          className={`ml-4 mt-1 inline-block transition ${isDropdownActive == index && activeSideContent == index
                            ? "rotate-180"
                            : "rotate-0"
                            }`}
                        >
                          <ArrowDown />
                        </span>
                      )}
                    </span>
                    {isDropdownActive == index && activeSideContent == index && (
                      <div className="pl-2">
                        {subRoute.map((item: any, index: number) => {
                          return (
                            <span
                              onClick={() => {
                                setIsDropDownActiveFunc(-1);
                              }}
                              className="sub-route-item mt-2 relative"
                            >
                              {item.subname}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
              }
            </>
          );
        })}
        <div className="logout-container">
          <span onClick={() =>  logout()} className="text-[15px] pointer text-softpassgray-150 flex items-center">
            <DLogout /> &nbsp; &nbsp; Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideNav;
