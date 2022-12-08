import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { useContext, useState } from 'react';
import { ReactComponent as ArrowDown } from "../../../../../assets/image/svg/ArrowDown.svg";
import AppDatePicker from '../../../../../components/AppComponent/AppDatePicker';
import { AppProvider } from '../../../../../contextProvide/AppContext';


const TopCard = () => {
    const [dateRange, setdateRange] = useState<any>({})
    const [isShowDate, setisShowDate] = useState(false)
    const { userDetail, } = useContext(AppProvider)
    const [amount, setAmount] = useState([
        { name: "Last 1 week" },
        { name: "Last 2 weeks" },
        { name: "Last 3 weeks" },
        { name: "Last one month" },
    ]);

    return (
        <div className="flex flex-wrap items-center px-3 py-3 border-gray-300 border-[1px] rounded-md my-8 bg-gray-100/40">
            <div className="md:w-6/12 sm:w-9/12 flex items-center ">
                <span className="text-sm text-gray-400">Team members</span>
                {/* <AppDropDownT placeholder="Temitayo Abimbola" /> */}
                <b className="table-filter-item capitalize pointer">
                    {userDetail?.first_name} {userDetail?.last_name}{" "}

                </b>
                <AppDatePicker
                    setdateRange={setdateRange}
                    setisOpen={(value) => console.log('valdld')}
                    isOpen={isShowDate} />


                <div className="w-6/12 md:w-3/12 flex justify-end md:justify-center">
                    <Menu closeOnSelect={false}>
                        <MenuButton as={Button} colorScheme="red">
                            <span
                                onClick={() => setisShowDate(!isShowDate)}
                                className="table-filter-item pointer">
                                Date{" "}
                                <i className="pt-[3px]">
                                    <ArrowDown color={"black"} width={"17"} />
                                </i>

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
            <div className="md:w-6/12 sm:w-3/12 text-end">
                <span onClick={() => {
                    setdateRange({
                        startDate: null,
                        endDate: null
                    })
                }} className="text-[12px] pointer text-softpasspurple-500">
                    Clear filter
                </span>
            </div>
        </div>
    )
}

export default TopCard
