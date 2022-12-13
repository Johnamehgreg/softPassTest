import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import moment from "moment";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
    onChange: (e: any) => void;
}

const TimeRange: React.FC<Props> = ({ onChange }) => {

    const [amount, setAmount] = useState([
        { name: "Last 1 week" },
        { name: "Last 2 weeks" },
        { name: "Last 3 weeks" },
        { name: "Last one month" },
    ]);
    return (
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
                        <MenuItem>
                            {/* <span className="flex items-center text-[15px] py-[6px] px-4 pl-6 gariff"> */}
                            <span
                            onClick={() => {
                                let start = moment().format('YYYY-MM-DD')

                                let end = moment().subtract(1, 'weeks').format('YYYY-MM-DD')

                                onChange({start, end})
                            }}
                            className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                                <abbr className="font-semibold text-[13px]">
                                    Last 1 week
                                </abbr>
                                
                                <span className="checkmark"></span>
                            </span>
                        </MenuItem>
                        <MenuItem>
                            {/* <span className="flex items-center text-[15px] py-[6px] px-4 pl-6 gariff"> */}
                            <span 
                            onClick={() => {
                                let start = moment().format('YYYY-MM-DD')

                                let end = moment().subtract(2, 'weeks').format('YYYY-MM-DD')

                                onChange({start, end})
                            }}
                            className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                                <abbr className="font-semibold text-[13px]">
                                    Last 2 week
                                </abbr>
                                
                                <span className="checkmark"></span>
                            </span>
                        </MenuItem>
                        <MenuItem>
                            {/* <span className="flex items-center text-[15px] py-[6px] px-4 pl-6 gariff"> */}
                            <span 
                            onClick={() => {
                                let start = moment().format('YYYY-MM-DD')

                                let end = moment().subtract(3, 'weeks').format('YYYY-MM-DD')

                                onChange({start, end})
                            }}
                            className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                                <abbr className="font-semibold text-[13px]">
                                    Last 3 week
                                </abbr>
                                
                                <span className="checkmark"></span>
                            </span>
                        </MenuItem>
                        <MenuItem>
                            {/* <span className="flex items-center text-[15px] py-[6px] px-4 pl-6 gariff"> */}
                            <span 
                            onClick={() => {
                                let start = moment().format('YYYY-MM-DD')

                                let end = moment().subtract(4, 'weeks').format('YYYY-MM-DD')

                                onChange({start, end})
                            }}
                            className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                                <abbr className="font-semibold text-[13px]">
                                    Last one month
                                </abbr>
                                
                                <span className="checkmark"></span>
                            </span>
                        </MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </div>
    )
}

export default TimeRange