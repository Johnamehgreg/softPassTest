import moment from "moment";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
// import { useGetServices } from "../../../app-query-hook/use-services-hook";


interface Props {
    dropdownDirection: String;
    onChange: (e: any) => void
}

const TimeRange: React.FC<Props> = (props: Props) => {
    const { dropdownDirection, onChange } = props;
    const [headerTitle, setHeaderTitle] = useState("");
    const [fromUniqueInput, setFormUniqueInput] = useState([]);

    const [amount, setAmount] = useState([
        { name: "Last 1 week", num:1 },
        { name: "Last 2 weeks", num:2 },
        { name: "Last 3 weeks", num:3},
        { name: "Last one month", num:4 },
    ]);
    const [selectId, setSelectId] = useState(false);
    const [dbSelectId, setDbSelectId] = useState(0);
    const [title, settitle] = useState(' monthly')


    const [ServiceList, setServiceList] = useState(amount)
    let dropDownRef = React.useRef<any>()

    React.useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (!dropDownRef.current.contains(event.target)) {
                setSelectId(false)
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


  const  onSelect = (item:any) => {
        if(item.num === 1){
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(1, 'weeks').format('YYYY-MM-DD')

            onChange({start, end})
        }
        if(item.num === 2){
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(2, 'weeks').format('YYYY-MM-DD')

            onChange({start, end})
        }
        if(item.num === 3){
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(3, 'weeks').format('YYYY-MM-DD')

            onChange({start, end})
        }
        if(item.num === 4){
            let start = moment().format('YYYY-MM-DD')

            let end = moment().subtract(4, 'weeks').format('YYYY-MM-DD')

            onChange({start, end})
        }
    }






    return (
        <div className="select-range relative">
            
            <span
            onClick={() => {
                setSelectId(!selectId);
              }}
            className="w-min-150px flex justify-center">
                <abbr className="all-flex text-sm sm:text-md"> {title}</abbr>
                <IoMdArrowDropdown size={25} fill={"#A3AED0"} />
            </span>

            <div
                ref={dropDownRef}
                className={`select-id-dropdown py-8 px-2 z-50 
        ${selectId ? "flex" : "hidden"} 
        ${dropdownDirection == "right" ? "md:-right-full" : "md:-left-full"}`}
                onClick={(event) => {
                    closeDropDown(event);
                }}
            >
                <div className="select-id-dp-container">
                   
                    <div>
                        {ServiceList.map((item: any, index: number) => {
                            return (
                                <div
                                    className="my-2 py-1 mx-3"
                                    key={"selectId" + index}
                                    onClick={() => {
                                        setDbSelectId(index);
                                        setSelectId(false);
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
            </div>
        </div>
    );
};

export default TimeRange;
