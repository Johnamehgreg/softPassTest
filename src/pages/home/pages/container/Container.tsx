import { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import CardContainer from "./components/card";


const ContainerPage = () => {
    const [tab, settab] = useState(1)
    return (
        <section className="bg-white mt-8 garrif">
            <div className="flex items-center px-3 md:px-5 py-4 bg-softpassgray-50 lg:bg-transparent border-b-[1px] border-b-gray-300">
                <div className="container-page-tab w-6/12 ">
                    <button
                        onClick={() => {
                            settab(1)

                        }}
                        className={tab === 1 ? 'cont-tab-page cont-active-tab' : 'cont-tab-page'}>
                        Activate container
                    </button>
                    <button
                        onClick={() => {
                            settab(2)

                        }}
                        className={tab === 2 ? 'cont-tab-page cont-active-tab' : 'cont-tab-page'}>
                        Disactive container
                    </button>
                </div>
                <div className="w-6/12">
                    <div className="flex justify-end z-10">
                        <b className="border-[12px] border-gray-100 px-3 text-[15px] py-1 text-softpasspurple-300">
                            Create Container
                        </b>
                    </div>
                </div>


            </div>


            <div className="px-2 mt-3">
                <CardContainer>
                    <>
                        <div className="flex justify-between w-full">
                            <h2>SoftPass</h2>

                            <div className=" flex ">
                                <p>edit</p>
                                <p>remove</p>
                            </div>
                        </div>

                        <div className="flex w-full mt-8">
                            {
                                list.map((item: any) => {
                                    return (
                                        <div className="item-key">
                                            <p>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                            <div className="item-key">
                                <AiOutlinePlus />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <div className="">
                                <p>container key</p>
                                <p>20i92i04i3ffnbhf lsknad</p>
                            </div>
                        </div>


                    </>

                </CardContainer>
            </div>

        </section>
    )
}

let list = [
    {
        name: "BVN"
    },
    {
        name: "NIN"
    },
    {
        name: "Driver Liciens"
    },
    {
        name: "Nigerian international Passport"
    },
    {
        name: "PVC"
    }
]


export default ContainerPage