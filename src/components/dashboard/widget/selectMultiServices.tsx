import React, { useEffect, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

interface Props {
    onChange: (e: any) => void;
    options: any
}

const SelectMultiServices: React.FC<Props> = ({ onChange, options }) => {


    //Variables

    const [list, setlist] = useState<any>([])
    const [showDropDown, setshowDropDown] = useState(false)





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
        let newList  = 
        list
        .filter((i:any) => i.isSelected === true  )
        .map((obj:any) => {
            return obj.value
        })
        onChange(newList)
    }, [list])

    useEffect(() => {
      setlist(options)
    }, [options])
    










    return (
        <div className=" text-softpasspurple-300 relative">

            <div
            onClick={() =>  setshowDropDown(!showDropDown)}
             className="flex pointer  verification-input-contain px-2   justify-between w-full items-center">
                <p className="text-black text-[14px]">Select Services</p>
                <IoMdArrowDropdown

                    color="#000" size={25} />
            </div>


            <div
                className={` z-50 border-2 ${showDropDown ? 'hidden' : 'block'} border-gray-100 py-4 px-4 rounded-[5px]   "md:-left-full"`}

            >

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
                                        <HiCheckCircle color="#E1227B" size={20} />
                                        :
                                        <RiCheckboxBlankCircleFill color="#E1227B" size={20} />
                                }


                                <p className="text-gray-500 text-[13px] ml-2"> {item?.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SelectMultiServices;
