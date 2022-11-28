import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { ReactComponent as ProfileImage } from "../../../assets/svg/profile-circle.svg";
import HomeEdictor from "../components/Edictor";

interface Props { }

const FacialVerification: React.FC = (props: Props) => {
  const { } = props;

  //VARIABLES
  const [headerTitle, setHeaderTitle] = useState("");
  const [fromUniqueInput, setFormUniqueInput] = useState([]);
  const [displayInput, setdisplayinput] = useState([
    {
      title: "Full name of staff",
      value: "",
    },
    {
      title: ["apple", "baller"],
      value: "",
    },
    {
      title: "phone number",
      value: "",
    },
    {
      title: "Currency type (NGN)",
      value: "",
    },
    {
      title: "container",
      value: "",
      content: [],
    },
  ]);

  //FUNCTION

  const onChange = (val: string, array: any) => {
    setHeaderTitle(val);
    setFormUniqueInput(array);
  };

  return (
    <>
      <div>
        {/* start of select id */}
        <div className="max-w-[200px]">
          {/* <SelectIdDropdown onChange={onChange} dropdownDirection="right" /> */}
        </div>
        {/* end of select id */}
      </div>

      <section className="bg-white mt-8 garrif rounded-md">
        <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
          <h1 className="w-6/12 text-[22px] font-semibold">{headerTitle}</h1>
          <div className="w-6/12">
            <div className="flex justify-end z-10">
              <b className="border-[12px] border-gray-100 px-3 text-[17px] py-1 text-softpasspurple-300">
                100/calls
              </b>
            </div>
          </div>
        </div>

        <div className="border-t-[1px] border-gray-500 px-2 flex justify-center w-full">
          <div className="lg:w-11/12 w-full pt-5 flex flex-wrap justify-between">
            <div className="w-full md:w-5/12 ">
              <div className="flex justify-between">
                <div className="w-5/12 rounded-lg">
                  <div className="border-[1px] cursor-pointer flex flex-wrap py-4 rounded-lg justify-center border-softpasspurple-300/40 w-full">
                    <input className="hidden" type="file"></input>
                    <ProfileImage />
                  </div>
                  <button className="upload-button">Upload First image</button>
                </div>
                <div className="w-5/12 rounded-lg">
                  <div className="border-[1px] cursor-pointer flex flex-wrap py-4 rounded-lg justify-center border-softpasspurple-300/40 w-full">
                    <input className="hidden" type="file"></input>
                    <ProfileImage />
                  </div>
                  <button className="upload-button">Upload Second image</button>
                </div>
              </div>
              <div className="verification-input-contain my-6">
                <input
                  required
                  type="text"
                  placeholder="Currency type (NGN)"
                ></input>
              </div>
              <div className="input-contain pl-4">
                <Select placeholder="Container">
                  {["A", "B", "C"].map((item: any, index: number) => {
                    return <option value={item}>{item}</option>;
                  })}
                </Select>
              </div>

              <div className="w-full text-center py-3 garrif">
                <button className="next-button">Submit</button>
              </div>
            </div>
            <div className="w-full md:w-7/12 flex flex-wrap md:pl-7 mb-5">
              <div className="mt-4 w-full bg-gray-100 md:p-5 p-2 rounded-md overflow-auto">
                <b className="mb-2 block">Request</b>
                <HomeEdictor />
              </div>

              <div className="mt-4 w-full bg-gray-100 md:p-5 p-2 rounded-md overflow-auto">
                <b className="mb-2 block">Response</b>
                <HomeEdictor />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacialVerification;
