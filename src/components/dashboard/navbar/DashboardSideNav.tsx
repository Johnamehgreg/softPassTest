import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../../assets/image/svg/ArrowDown.svg";
import { ReactComponent as DLogout } from "../../../assets/image/svg/logout.svg";
import { ReactComponent as DLogo } from "../../../assets/image/svg/softpassSVG 3.svg";
import { AuthProvider } from "../../../contextProvide/AuthContext";
import routes from '../../../navigation/Routes';
import { dashboardSideRoute } from "../dashboardSideRoute";
import { useSideCategoryHook } from './dashboard-query-hook';
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
  const [categories, setcategories] = useState<any>([])
  //FUNCTIONS
  const setNavigation = (val: string) => {
    setRoute(val);
  };
  const setIsDropDownActiveFunc = (val: number) => {
    isDropdownActive == -1 ? setIsDropDownActive(val) : setIsDropDownActive(-1);
  };

  const { setisUserLogin } = useContext(AuthProvider)



  const logout = async () => {
    setisUserLogin(false)
    navigation(routes.landing)
    try {
      Cookies.remove('isLogin')
    } catch (e) {

    }

  }

  const onError = () => {

  }


  const { data, refetch, isFetched, isSuccess } = useSideCategoryHook({ onError })

  const checkSuccess = () => {

    if (isFetched && isSuccess) {
      console.log(data, 'Hello data is')
      setcategories(data.data)
    }
  }

  let verificationList = categories?.filter((item:any) => item.category_type === "Identity" )
  let utilityList = categories?.filter((item:any) => item.category_type === "Utility" )


  useEffect(() => {
    checkSuccess()
  }, [data])

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
                      {categories?.length > 0 && (
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
                      <div className="pl-2 w-full">
                        {verificationList?.map((item: any, iDEX: number) => {
                          return (
                            <div
                              onMouseEnter={() => {

                              }}
                              onClick={() => {
                                navigation(item?.route)
                                setindex(iDEX)
                                // setIsDropDownActiveFunc(-1);
                              }}
                              className="sub-route-item mt-2 relative"
                            >
                              {item?.category_name}
                              {/* {
                                item?.subRoute?.length > 0 && (
                                  <SubNav item={item} />
                                )
                              } */}

                              <SubNav id={item._id} />

                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>


                  :

                  name === 'Utilities' ?

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
                     ${activeSideContent === index
                            ? " text-softpasspurple-300 scale-[1.1] transition duration-300 bg-softpasspurple-300/10"
                            : "transition duration-300"
                          }
            `}
                      >

                        <div className="flex items-center">
                          <Icon
                            width={"18"}
                            class={
                              activeSideContent === index
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
                      {isDropdownActive === index && activeSideContent == index && (
                        <div className="pl-2 w-full">
                          {utilityList?.map((item: any, iDEX: number) => {
                            return (
                              <span
                                onMouseEnter={() => {

                                }}
                                onClick={() => {
                                  navigation(item?.route)
                                  setindex(iDEX)
                                  // setIsDropDownActiveFunc(-1);
                                }}
                                className="sub-route-item w-full mt-2 relative"
                              >
                                {item?.category_name}


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
                        <div className="pl-2 w-full">
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
          <span onClick={() => logout()} className="text-[15px] pointer text-softpassgray-150 flex items-center">
            <DLogout /> &nbsp; &nbsp; Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideNav;
