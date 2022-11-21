import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
  dropdownDirection: String;
  onChange?: any;
}

const SelectIdDropdown: React.FC<Props> = (props: Props) => {
  const { dropdownDirection, onChange } = props;
  const ref = useRef(null);

  //Variables
  const [selectId, setSelectId] = useState(false);
  const [dbSelectId, setDbSelectId] = useState(0);

  const [selectContent, setselectContent] = useState([
    { name: "BVN", title: "Bank Verification Number (BVN)" },
    { name: "NIN", title: "National Identity Number (NIN)" },
    { name: "Drivers’ License", title: "Drivers’ License" },
    {
      name: "Nigerian International Passport",
      title: "Nigerian International Passport",
    },
    { name: "PVC", title: "parmenet Voter`s Card" },
    { name: "Phone number verification", title: "Phone Number Verification" },
    {
      name: "Advanced Phone number verification",
      title: "Advanced Phone number verification",
    },
    { name: "OCR", title: "OCR" },
    { name: "Facial Comparison", title: "Facial Comparison" },
  ]);

  //FUNCTION
  const closeDropDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget == event.target) setSelectId(false);
  };

  //HOOK
  useEffect(() => {
    onChange(selectContent[0].title, selectContent);
  }, []);

  return (
    <div className="select-verification relative">
      <span
        className="flex items-center cursor-pointer"
        onClick={() => {
          setSelectId(!selectId);
        }}
      >
        Select verification ID <IoMdArrowDropdown size={25} />
      </span>

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
          <form className="select-dp-form mb-4">
            <BiSearch /> &nbsp; &nbsp;
            <input
              placeholder="Search Verification ID"
              className="bg-transparent outline-none"
            />
          </form>
          <div>
            {selectContent.map((item: any, index: number) => {
              return (
                <div
                  className="my-2 py-1 mx-3"
                  key={"selectId" + index}
                  onClick={() => {
                    onChange(item.title, selectContent);
                    setDbSelectId(index);
                    setSelectId(false);
                  }}
                >
                  <label className="container flex items-center text-[15px] py-[6px] px-4 pl-6 gariff">
                    <abbr className="font-semibold text-[13px]">
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

export default SelectIdDropdown;
