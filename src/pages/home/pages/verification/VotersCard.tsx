import React, { useState } from "react";
import SelectIdDropdown from "../../../../components/dashboard/widget/SelectIdDropdown";
import HomeInput from "../../../../components/input/homeInput";
import HomeEdictor from "../../components/Edictor";

interface Props { }

const VotersCard: React.FC = (props: Props) => {
    const { } = props;

    //VARIABLES
    const [headerTitle, setHeaderTitle] = useState("");
    const [fromUniqueInput, setFormUniqueInput] = useState([]);
 

    //FUNCTION

    return (
        <>
              {/* start of select id */}
              <div className="max-w-[200px]">
                <SelectIdDropdown  dropdownDirection="right" />
            </div>
            {/* end of select id */}

            <section className="bg-white mt-8 garrif rounded-md">
                <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
                    <h1 className="w-6/12 text-[22px] font-semibold">Voters Card'</h1>
                    <div className="w-6/12">
                        <div className="flex justify-end z-10">
                            <b className="border-[12px] border-gray-100 px-3 text-[17px] py-1 text-softpasspurple-300">
                                <span>&#8358;</span>
100/call
                            </b>
                        </div>
                    </div>
                </div>

                <div className="border-t-[1px] border-gray-500 px-2 flex justify-center w-full">
                    <div className="lg:w-11/12 w-full pt-5 flex flex-wrap justify-between">
                        <div className="w-full md:w-5/12 ">
                            <form>
                                <HomeInput onBlur={() => console.log(',f') } />
                                <HomeInput onBlur={() => console.log(',f') }  />
                                <HomeInput onBlur={() => console.log(',f') }/>
                                <HomeInput onBlur={() => console.log(',f') } />
                                <HomeInput onBlur={() => console.log(',f') } />
                                <div className="w-full text-center py-3 garrif">
                                    <button className="next-button">Submit</button>
                                </div>
                            </form>
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

export default VotersCard;
