import React, { useState } from "react";
import HomeFileUpload from "../../../../components/input/homeFileUpload";
import TopCard from "./components/TopCard";
// import HomeEdictor from "../components/Edictor";

interface Props { }


const Compliance: React.FC = (props: Props) => {
    const { } = props;

    //VARIABLES
    const [headerTitle, setHeaderTitle] = useState("");
    const [fromUniqueInput, setFormUniqueInput] = useState([]);
    const [displayInput, setdisplayinput] = useState([
        {
            title: "Business Name",
            value: "",
        },
        {
            title: "company size",
            value: "",
        },
        {
            title: "Tax ID Number",
            value: "",
        },
      
    ]);

    //FUNCTION

    const onChange = (val: string, array: any) => {
        setHeaderTitle(val);
        setFormUniqueInput(array);
    };

    return (
        <>
           <TopCard />
            <section className="bg-white  garrif rounded-md">
                <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
                    <h1 className="w-6/12 text-[22px] font-semibold">Customer credentials</h1>
                </div>

                <div className="border-t-[1px] px-8 border-gray-500  flex  w-full">
                    <div className="lg:w-11/12 w-full pt-5 flex flex-wrap justify-between">
                        <div className="w-full md:w-4/12 ">
                            <form>
                                {displayInput.map((item: any, index: number) => {
                                    const { title } = item;
                                    let filterTitle = "";
                                    if (Array.isArray(title)) {
                                        filterTitle =
                                            "Input " +
                                            (
                                                fromUniqueInput.filter(
                                                    (item: any, index: number) =>
                                                        item.title === headerTitle
                                                )[0] as any
                                            )?.name;
                                    } else filterTitle = title;

                                    return (
                                        <div className="verification-input-contain my-4">
                                            <input
                                                required
                                                type="text"
                                                placeholder={filterTitle}
                                            ></input>
                                        </div>
                                    );
                                })}

                            </form>
                        </div>
                        <div className="w-full md:w-7/12 flex flex-wrap md:pl-7 mb-5">

                        </div>
                    </div>
                </div>

                <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
                    <h1 className="w-6/12 text-[22px] font-semibold">Director Information</h1>
                </div>

                <div className="border-t-[1px]  border-gray-500 px-2 flex  ">
                    <div className="w-full md:w-5/6 md:pl-4   pt-5 flex flex-wrap justify-between">
                        <div className="w-full md:w-5/12 ">
                            <form>
                                {displayInput.map((item: any, index: number) => {
                                    const { title } = item;
                                    let filterTitle = "";
                                    if (Array.isArray(title)) {
                                        filterTitle =
                                            "Input " +
                                            (
                                                fromUniqueInput.filter(
                                                    (item: any, index: number) =>
                                                        item.title === headerTitle
                                                )[0] as any
                                            )?.name;
                                    } else filterTitle = title;

                                    return (
                                        <div className="verification-input-contain my-4">
                                            <input
                                                required
                                                type="text"
                                                placeholder={filterTitle}
                                            ></input>
                                        </div>
                                    );
                                })}
                                
                            </form>
                        </div>
                        <div className="w-full md:w-5/12 ">
                            <form>
                                <HomeFileUpload placeholder="Address" />
                                <HomeFileUpload placeholder="Upload CAC form" />
                                <HomeFileUpload placeholder="Upload Certification of Incorporation" />
                                <HomeFileUpload placeholder="Upload Proof of Address" />
                                <div className="w-full mt-8  mb-8 justify-end flex  ">
                                    <button className="min-w[20px] bg-softpasspurple-300 px-6 py-1 rounded-md text-white">Save</button>
                                </div>
                            </form>
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default Compliance;
