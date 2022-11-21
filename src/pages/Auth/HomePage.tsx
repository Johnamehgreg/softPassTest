import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import ChartDashboard from "../../components/dashboard/widget/Chart";
import TopCardContainer from "../../components/dashboard/widget/TopCardContainer";
import DashboardTemplate from "../../layouts/Dashboard/DashboardTemplate";
import { createPopper } from "@popperjs/core";
import SelectIdDropdown from "../../components/dashboard/widget/SelectIdDropdown";

interface Props {}

function HomePage(props: Props) {
  const {} = props;
  const ref = useRef(null);

  //Variables
  const [selectId, setSelectId] = useState(false);
  const [dbSelectId, setDbSelectId] = useState(-1);
  const [tabs, setTabs] = useState([
    {
      name: "Number of Total calls",
      title: "This month",
      amount: "23",
      type: "regular",
    },
    {
      name: "Number of Total calls",
      title: "This month",
      amount: "23",
      type: "regular",
    },
    {
      name: "Number of Total calls",
      title: "This month",
      amount: "23",
      type: "regular",
    },
    {
      name: "Total Wallet Balance",
      amount: "N 40,000.00",
      type: "wallet",
    },
  ]);

  const [amount, setAmount] = useState([
    { name: "Last 1 week" },
    { name: "Last 2 weeks" },
    { name: "Last 3 weeks" },
    { name: "Last one month" },
  ]);

  const [selectContent, setselectContent] = useState([
    { name: "BVN" },
    { name: "NIN" },
    { name: "Drivers’ License" },
    { name: "Nigerian International Passport" },
    { name: "PVC" },
    { name: "Phone number verification" },
    { name: "Advanced Phone number verification" },
    { name: "OCR" },
    { name: "Facial Comparison" },
  ]);

  //FUNCTION
  const closeDropDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget == event.target) setSelectId(false);
  };


  return (
    <DashboardTemplate welcomeNote={"Goodday Micheal "} title={'Trust you are having a great day 😄'}>
      <TopCardContainer tabs={tabs} />

      <section className="bg-white mt-8 garrif">
        <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 lg:bg-transparent">
          <h1 className="w-6/12 text-[22px] font-semibold">Overview</h1>
          <div className="w-6/12">
            <div className="flex justify-end z-10">
                <SelectIdDropdown dropdownDirection={'left'}/>
            </div>
          </div>
        </div>

        <div className=" flex items-center border-t-[1px] border-gray-300 sm:px-5 px-2 py-4">
          <div className="w-6/12 md:w-9/12">
            <div className="flex items-center font-semibold full whitespace-nowrap">
              <span className="text-sm sm:text-lg">No API Selected</span>
              <abbr className="text-sm flex items-center text-softpassgreen-300 relative top-[2px]">
                &nbsp;&nbsp;
                <AiFillCheckCircle fill="#05CD99" />
                <abbr className="pl-1 relative -top-[2px]"> On track</abbr>
              </abbr>
            </div>
          </div>
          <div className="w-6/12 md:w-3/12 flex justify-end md:justify-center">
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} colorScheme="red">
                <span className="w-min-150px flex justify-center">
                  <abbr className="all-flex text-sm sm:text-md">Monthly</abbr>
                  <IoMdArrowDropdown size={25} fill={"#A3AED0"} />
                </span>
              </MenuButton>
              <MenuList
                bgColor="white"
                minWidth={"230px"}
                borderRadius="5px"
                boxShadow="inner"
                border={"2px"}
                borderColor="red"
                padding="10px"
              >
                <MenuGroup title="" padding={"15px"}>
                  {amount.map((item: any, index: number) => {
                    return (
                      <MenuItem>
                        {/* <span className="flex items-center text-[15px] py-[6px] px-4 pl-6 gariff"> */}
                        <label className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                          <abbr className="font-semibold text-[13px]">
                            {item.name}
                          </abbr>
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </MenuItem>
                    );
                  })}
                </MenuGroup>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="py-12 md:px-8 px-4 flex justify-between">
          <div className="flex flex-wrap px-3 py-3 shadow-xl sm:w-52 w-40">
            <b className="text-[12px] sm:text-sm block w-full pb-4">
              Successfull Calls
            </b>
            <span className="flex justify-center w-full items-center">
              <b className="text-lg all-flex">25</b>
              <abbr className="text-[9px] text-softpassgreen-300 bg-softpassgreen-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
                +25%
              </abbr>
            </span>
          </div>
          <div className="flex flex-wrap px-3 py-3 shadow-xl sm:w-52 w-40">
            <b className="text-[12px] sm:text-sm block w-full pb-4">
              Failed calls
            </b>
            <span className="flex justify-center w-full items-center">
              <b className="text-lg all-flex">10</b>
              <abbr className="text-[9px] text-softpasspurple-300 bg-softpasspurple-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
                +25%
              </abbr>
            </span>
          </div>
        </div>
        <div className="w-full overflow-x-scroll">
          {
            //@ts-ignore
            <ChartDashboard />
          }
        </div>
      </section>
    </DashboardTemplate>
  );
}

export default HomePage;
