import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGetServices } from "../../../app-query-hook/use-services-hook";

interface Props {
  dropdownDirection: String;
}

const SelectIdDropdown: React.FC<Props> = (props: Props) => {
  const { dropdownDirection,  } = props;
  const ref = useRef(null);
  let dropDownRef = React.useRef<any>()

  const [headerTitle, setHeaderTitle] = useState("");
  const [fromUniqueInput, setFormUniqueInput] = useState([]);
 

  const [ServiceList, setServiceList] = useState([])



  const navigation = useNavigate()

  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!dropDownRef.current.contains(event.target)) {
        setSelectId(false)
      }
    })
  })

  //Variables
  const [selectId, setSelectId] = useState(false);
  const [dbSelectId, setDbSelectId] = useState(0);

  //FUNCTION
  const closeDropDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget == event.target) setSelectId(false);
  };

  const onChange = (val: string, array: any) => {
    setHeaderTitle(val);
    setFormUniqueInput(array);
  };


  const {data, isFetched, isSuccess, } = useGetServices()

  const checkSuccess = () => {
    if(isSuccess && isFetched){
      setServiceList(data?.data)
    }
  }


  const handleSearch = (value: any) => {

    if (value.length === 0) {
      return setServiceList(data?.data);
    }
    let filteredData = data?.data?.filter((item: any, index: any) =>
      item?.service_name.toLowerCase().includes(value.toLowerCase())
    );

    setServiceList(filteredData)
  };



  //HOOK
  useEffect(() => {
    checkSuccess()
    // onChange(selectContent[0].title, selectContent);
  }, [data]);



  

  return (
    <div className="select-verification text-softpasspurple-300 relative">
      <span
        className="flex items-center cursor-pointer"
        onClick={() => {
          setSelectId(!selectId);
        }}
      >
        Select verification ID <IoMdArrowDropdown color="#000" size={25} />
      </span>

      <div
        ref={dropDownRef}
        className={`select-id-dropdown z-50 
        ${selectId ? "flex" : "hidden"} 
        ${dropdownDirection == "right" ? "md:-right-full" : "md:-left-full"}`}
        onClick={(event) => {
          closeDropDown(event);
        }}
      >
        <div className="select-id-dp-container px-1">
          <form className="select-dp-form mb-4">
            <BiSearch /> &nbsp; &nbsp;
            <input
              placeholder="Search Verification ID"
              className="bg-transparent outline-none"
              onChange={(e:any) => handleSearch(e.target.value)}
            />
          </form>
          <div>
            {ServiceList.map((item: any, index: number) => {
              return (
                <div
                  className="my-2 py-1 mx-3"
                  key={"selectId" + index}
                  onClick={() => {
                    navigation(`/verification-services/${item.service_name}`)
                    setDbSelectId(index);
                    setSelectId(false);
                  }}
                >
                  <label className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                    <abbr className="font-semibold text-black text-[13px]">
                      {item.service_name}
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

export default SelectIdDropdown;
