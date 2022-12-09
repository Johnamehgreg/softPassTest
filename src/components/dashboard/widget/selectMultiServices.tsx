import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";


interface Props {
    onChange: (e: any) => void;
    options: any
}

const SelectMultiServices: React.FC<Props> = ({ onChange, options }) => {


    //Variables

    const [list, setlist] = useState<any>([])
    const [showDropDown, setshowDropDown] = useState(true)

    const ani1 = useAnimation()
    const arrowAni = useAnimation()

    useEffect(() => {
        if (showDropDown) {
            ani1.start({
                x: 0,
                height: '40px',
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        } else {
            ani1.start({
                x: 0,
                height: 'auto',
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
                rotate:'0deg',
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        } else {
            arrowAni.start({
                x: 0,
                rotate:'180deg',
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3
                }
            })
        }
    }, [showDropDown])






    const handleOnClick = (item: any) => {
        console.log(item)
        let newList = list.map((obj: any) => {
            if (item.value === obj.value) {
                return { ...item, isSelected: !obj.isSelected }
            }

            return obj
        })
        setlist(newList)
    }

    useEffect(() => {
        let newList =
            list
                .filter((i: any) => i.isSelected === true)
                .map((obj: any) => {
                    return obj.value
                })
        onChange(newList)
    }, [list])

    useEffect(() => {
        setlist(options)
    }, [options])











    return (
        <div className=" text-softpasspurple-300 relative">

            <motion.div
                animate={ani1}
                className="  px-2  overflow-y-hidden e w-full border-[1px] rounded-md border-gray-300">
                <div onClick={() => setshowDropDown(!showDropDown)} className=" pointer flex w-full justify-between h-[40px] items-center ">
                    <p className="text-gray-400 text-[14px]">Select Services</p>
                    <motion.div animate={arrowAni} >
                        <MdKeyboardArrowDown color="#33106B" size={20} />
                    </motion.div>

                </div>


                <div className={` z-50 py-4 md:-left-full`}>

                    <div>
                        {list?.map((item: any, index: number) => {
                            return (
                                <div
                                    className={`${item?.isSelected ? 'bg-gray-100' : 'bg-white'} py-1 items-center rounded-[5px] mb-1 px-2  pointer min-h-[30px] flex`}
                                    key={"selectId" + item.value}
                                    onClick={() => {
                                        handleOnClick(item)
                                    }}
                                >

                                    {
                                        item?.isSelected === true ?
                                            // <HiCheckCircle color="#E1227B" size={20} />
                                            <div className="h-[18px] flex items-center justify-center w-[18px] rounded-md bg-softpasspurple-300">
                                                <BsCheck color="#fff" />
                                            </div>
                                            :
                                            <div className="h-[18px] w-[18px] rounded-md border-gray-300 border-[1px] bg-white">

                                            </div>
                                    }


                                    <p className="text-gray-500 text-[13px] ml-2"> {item?.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>

            {/* ${!showDropDown ? 'hidden' : 'block'} */}
            {/* border-gray-100 */}



        </div>
    );
};

export default SelectMultiServices;
