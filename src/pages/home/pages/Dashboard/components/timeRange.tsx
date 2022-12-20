import moment from "moment";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
// import { useGetServices } from "../../../app-query-hook/use-services-hook";
import { motion, useAnimation } from 'framer-motion';


interface Props {
    dropdownDirection: String;
    onChange: (e: any) => void
}

const TimeRange: React.FC<Props> = (props: Props) => {
    const { dropdownDirection, onChange } = props;

    const ani1 = useAnimation()
    const arrowAni = useAnimation()
    let dropDownRef = React.useRef<any>()

    const [amount, setAmount] = useState([
        { name: "Last 1 week", num: 1 },
        { name: "Last 2 weeks", num: 2 },
        { name: "Last 3 weeks", num: 3 },
        { name: "Last one month", num: 4 },
    ]);
    const [selectId, setSelectId] = useState(false);
    const [dbSelectId, setDbSelectId] = useState(0);
    const [title, settitle] = useState(' monthly')
    const [showDropDown, setshowDropDown] = React.useState(false)



    const [ServiceList, setServiceList] = useState(amount)

    React.useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!dropDownRef.current.contains(event.target)) {
                setshowDropDown(false)
            }
        })
    })






    //Variables

    //FUNCTION
    const closeDropDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.currentTarget == event.target) setSelectId(false);
    };


    const onSelect = (item: any) => {
        if (item.num === 1) {
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(1, 'weeks').format('YYYY-MM-DD')

            onChange({ start, end })
        }
        if (item.num === 2) {
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(2, 'weeks').format('YYYY-MM-DD')

            onChange({ start, end })
        }
        if (item.num === 3) {
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(3, 'weeks').format('YYYY-MM-DD')

            onChange({ start, end })
        }
        if (item.num === 4) {
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(4, 'weeks').format('YYYY-MM-DD')

            onChange({ start, end })
        }

        setshowDropDown(!showDropDown)
    }

    React.useEffect(() => {
        if (showDropDown) {
            ani1.start({

                scale: 1,
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        } else {
            ani1.start({
                scale: 0,
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        }
        if (showDropDown) {
            arrowAni.start({
                x: 0,
                rotate: '0deg',
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        } else {
            arrowAni.start({
                x: 0,
                rotate: '180deg',
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        }
    }, [showDropDown])






    return (
        <div ref={dropDownRef} className="select-range  w-full justify-end relative">

            <div className=""></div>

            <span
                onClick={() => setshowDropDown(!showDropDown)}
                className=" flex justify-center pointer">
                <abbr className="all-flex text-sm sm:text-md"> {title}</abbr>
                <motion.div animate={arrowAni} >
                    <IoMdArrowDropdown size={25} fill={"#A3AED0"} />
                </motion.div>

            </span>

            <motion.div
                animate={ani1}
                className={` right-0  px-2 z-50 absolute bg-white shadow-lg  top-[40px] `}
                onClick={(event) => {
                    closeDropDown(event);
                }}
            >
                <div className="">

                    <div>
                        {ServiceList.map((item: any, index: number) => {
                            return (
                                <div
                                    className="my-2 py-1 mx-3"
                                    key={"selectId" + index}
                                    onClick={() => {
                                        setDbSelectId(index);
                                        setSelectId(false);
                                        setshowDropDown(false)
                                        onSelect(item)
                                        settitle(item?.name)
                                        console.log(item, 'services id')
                                    }}
                                >
                                    <label className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                                        <abbr className="font-semibold text-black text-[13px]">
                                            {item.name}
                                        </abbr>
                                        <input type="checkbox" checked={dbSelectId == index} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default TimeRange;
