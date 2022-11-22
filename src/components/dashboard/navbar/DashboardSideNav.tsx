import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as DLogo } from "../../../assets/image/svg/softpassSVG 3.svg";
import { dashboardSideRoute } from "../dashboardSideRoute";
import { ReactComponent as DLogout } from "../../../assets/image/svg/logout.svg";
import { ReactComponent as ArrowDown } from "../../../assets/image/svg/ArrowDown.svg";

interface Props {
  closeSidebar: boolean;
  closebarFunction: Function;
}

const DashboardSideNav: React.FC<Props> = (props: Props) => {
  const { closeSidebar, closebarFunction } = props;

  //VARIABLES
  const [route, setRoute] = useState("Users");
  const [isDropdownActive, setIsDropDownActive] = useState(-1);
  const [activeSideContent, setActiveSideContent] = useState(-1);

  //FUNCTIONS
  const setNavigation = (val: string) => {
    setRoute(val);
  };
  const setIsDropDownActiveFunc = (val: number) => {
    isDropdownActive == -1 ? setIsDropDownActive(val) : setIsDropDownActive(-1);
  };

  return (
    <div
      className={`w-full side-nav-container overflow-x-visible overflow-y-auto px-6 pt-6`}
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
          const { Icon, subRoute } = item;
          return (
            <div className="flex flex-wrap py-1 inter">
              <span
                onClick={() => {
                  setActiveSideContent(index);
                  setIsDropDownActiveFunc(index);
                }}
                className={`flex w-full items-center py-2 px-1 rounded-md text-[13px] capitalize cursor-pointer
                ${
                  activeSideContent == index
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
                    className={`ml-4 mt-1 inline-block transition ${
                      isDropdownActive == index && activeSideContent == index
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
                          // setIsDropDownActiveFunc(-1);
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
          );
        })}
        <div className="logout-container">
          <span className="text-[15px] text-softpassgray-150 flex items-center">
            <DLogout /> &nbsp; &nbsp; Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideNav;
