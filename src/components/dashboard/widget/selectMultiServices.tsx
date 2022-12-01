import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGetServices } from "../../../app-query-hook/use-services-hook";

interface Props {
    onChange:(e:any) => void;
}

const SelectMultiServices: React.FC<Props> = ({onChange}) => {

    const ref = useRef(null);
    const [headerTitle, setHeaderTitle] = useState("");
    const [fromUniqueInput, setFormUniqueInput] = useState([]);
    const [serviceList, setserviceList] = useState<any>([])

    const [list, setlist] = useState<any>([])

    const { data, isSuccess, isFetched } = useGetServices()


    const checkSuccess = () => {
        if (isSuccess && isFetched) {

            let list = data?.data.map((item: any) => {
                return { label: item?.service_name, value: item?._id,}
            })
            let list1 = data?.data.map((item: any) => {
                return { label: item?.service_name, isSelected:false, value: item?._id,}
            })
            setlist(list1)
            setserviceList(list)
        }
    }

    //Variables
    const [selectId, setSelectId] = useState(false);

    //FUNCTION
    const closeDropDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.currentTarget == event.target) setSelectId(false);
    };




    //HOOK
    useEffect(() => {
        checkSuccess()
    }, [data])



    const handleOnClick = (value: string) => {

        let newList = list.map((item:any) => {
            if(value === item.value){
                return {...item, isSelected:!item.isSelected}
            }

            return item
        })

        setlist(newList)

        
    }


    useEffect(() => {
        let service = list.filter((item:any) => item.isSelected === true )
        console.log(list, 'update list check')
    }, [list])
    











    return (
        <div className=" text-softpasspurple-300 relative">


            <div onClick={() => {
                setSelectId(!selectId);
            }} className="flex pointer  verification-input-contain px-2  my-4 justify-between w-full items-center">
                <p className="text-black text-[14px]">Select Services</p>
                <IoMdArrowDropdown

                    color="#000" size={25} />
            </div>


            <div
                ref={ref}
                className={` z-50 verification-input-contain ${selectId ? "flex" : "hidden"} "md:-left-full"`}
                onClick={(event) => {
                    closeDropDown(event);
                }}
            >
                <div className="">

                    <div>
                        {serviceList.map((item: any, index: number) => {
                            return (
                                <div
                                    className="py-1 mx-3"
                                    key={"selectId" + index}
                                    onClick={() => {
                                        handleOnClick(item?.value)
                                        // setDbSelectId(index);
                                        // setSelectId(false);
                                    }}
                                >
                                    <label className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                                        <abbr className="font-semibold text-black text-[13px]">
                                            {item?.label}
                                        </abbr>
                                        <input type="checkbox" checked={item?.isSelected} />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectMultiServices;
