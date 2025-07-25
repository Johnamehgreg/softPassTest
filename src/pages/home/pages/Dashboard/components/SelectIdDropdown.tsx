import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useGetServices } from "../../../../../app-query-hook/use-services-hook";
// import { useGetServices } from "../../../app-query-hook/use-services-hook";


interface Props {
  dropdownDirection: String;
  onChange:(e:any) => void
}

const SelectIdDropdown: React.FC<Props> = (props: Props) => {
  const { dropdownDirection, onChange } = props;
  const [headerTitle, setHeaderTitle] = useState("");
  const [fromUniqueInput, setFormUniqueInput] = useState([]);
 

  const [selectId, setSelectId] = useState(false);
  const [dbSelectId, setDbSelectId] = useState(0);
  const [title, settitle] = useState(' Select verification ID')


  const [ServiceList, setServiceList] = useState([])
  let dropDownRef = React.useRef<any>()

  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!dropDownRef.current.contains(event.target)) {
        setSelectId(false)
      }
    })
  })

  const handleSearch = (value: any) => {

    if (value.length === 0) {
      return setServiceList(data?.data);
    }
    let filteredData = data?.data?.filter((item: any, index: any) =>
      item?.service_name.toLowerCase().includes(value.toLowerCase())
    );

    setServiceList(filteredData)
  };



  //Variables

  //FUNCTION
  const closeDropDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget == event.target) setSelectId(false);
  };


  const {data, isFetched, isSuccess, } = useGetServices()

  const checkSuccess = () => {
    if(isSuccess && isFetched){
      setServiceList(data?.data)
      console.log(data?.data, '@services data')
      // onChange(data?.data[0])
    }
  }


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
        {title}
        <IoMdArrowDropdown color="#000" size={25} />
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
          <form className="select-dp-form w-full mb-4">
            <BiSearch /> &nbsp; &nbsp;
            <input
              placeholder="Search Verification ID"
              className="bg-transparent w-full outline-none"
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
                    setDbSelectId(index);
                    setSelectId(false);
                    onChange(item)
                    settitle(item?.service_name)
                    console.log(item, 'services id')
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
