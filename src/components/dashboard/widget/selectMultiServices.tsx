import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGetServices } from "../../../app-query-hook/use-services-hook";

interface Props {
    dropdownDirection: String;
}

const SelectMultiServices: React.FC<Props> = (props: Props) => {
    const { dropdownDirection, } = props;
    const ref = useRef(null);
    const [headerTitle, setHeaderTitle] = useState("");
    const [fromUniqueInput, setFormUniqueInput] = useState([]);
    const [serviceList, setserviceList] = useState<any>([])


    const { data, isSuccess, isFetched } = useGetServices()


    const checkSuccess = () => {
        if (isSuccess && isFetched) {

            let list = data?.data.map((item: any) => {
                return { label: item?.service_name, value: item?._id, isSelected: false }
            })
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
        const newArr = serviceList.map((obj: any) => {
            if (obj.value === value) {

                let update = { ...obj, isSelected: true };
                
                return update;  
            }





            return obj;

        });


        const arr1 = [
            { id: 1, name: 'Alice' },
            { id: 1, name: 'Bob' },
            { id: 3, name: 'Charlie' },
        ];
        const newArr1 = arr1.map(obj => {
            if (obj.id === 1) {
                return { ...obj, name: 'Alfred' };
            }

            return obj;
        });

        // 👇️ [
        //  {id: 1, name: 'Alfred'}, {id: 1, name: 'Alfred'}, {id: 3, name: 'Charlie}
        // ]
        console.log(newArr1, 'change array');


        // setserviceList(newArr)
    }






    return (
        <div className=" text-softpasspurple-300 relative">


            <div className="flex justify-between w-full items-center">
                <p className="text-black">Select Services</p>
                <IoMdArrowDropdown
                    onClick={() => {
                        setSelectId(!selectId);
                    }}
                    color="#000" size={25} />
            </div>


            <div
                ref={ref}
                className={`select-id-dropdown z-50 
        ${selectId ? "flex" : "hidden"} 
        ${dropdownDirection == "right" ? "md:-right-full" : "md:-left-full"}`}
                onClick={(event) => {
                    closeDropDown(event);
                }}
            >
                <div className="select-id-dp-container">

                    <div>
                        {serviceList.map((item: any, index: number) => {
                            return (
                                <div
                                    className="my-2 py-1 mx-3"
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
