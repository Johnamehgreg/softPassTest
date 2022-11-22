import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import ApiCallHistory from "../../../components/dashboard/widget/ApiCallHistory";
import ChartDashboard from "../../../components/dashboard/widget/Chart";
import TopCardContainer from "../../../components/dashboard/widget/TopCardContainer";

const Dashboard = () => {
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

      ]);
    
      const [amount, setAmount] = useState([
        { name: "Last 1 week" },
        { name: "Last 2 weeks" },
        { name: "Last 3 weeks" },
        { name: "Last one month" },
      ]);
    return (
        <div>

            <TopCardContainer tabs={tabs} />


            <section className="bg-white mt-8 garrif">
                <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 lg:bg-transparent">
                    <h1 className="w-6/12 text-[22px] font-semibold">Overview</h1>
                    <div className="w-6/12">
                        <div className="flex justify-end z-10">
                            {/* <SelectIdDropdown dropdownDirection={'left'} /> */}
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

               <ApiCallHistory info={tabs}/>
                <div className="w-full overflow-x-scroll">
                    {
                        //@ts-ignore
                        <ChartDashboard />
                    }
                </div>
            </section>
        </div>
    )
}

export default Dashboard