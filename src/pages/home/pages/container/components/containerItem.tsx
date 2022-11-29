import moment from "moment";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import edit from '../../../../../assets/svg/edit.svg';
import CopyIcon from "../../../../../components/svg-icons/CopyIcon";
import DeactivateContainers from "../modals/DeactivateContainerModal";
import EditContainers from "../modals/EditContainerModal";

import CardContainer from "./card";


interface Props {
    item: any
}

const ContainerItem: React.FC<Props> = ({ item }) => {
    let data = moment().format('YYYY-MM-DD')
    const [isEditContOpen, setIsEditContOpen] = useState(false)
    const [isDeactivateContOpen, setIsDeactivateContOpen] = useState(false)
    
    const closeDeactivateContainerModal = (val: boolean) => {
        setIsDeactivateContOpen(val)
    }

    const closeEditContainerModal = (val: boolean) => {
        setIsEditContOpen(val)
    }

    return (
        <>
            <CardContainer>
                <>
                    <div key={item?._id} className="flex justify-between w-full py-3">
                        <h2>
                            {item?.container_name}
                        </h2>

                        <div className=" flex ">
                            <span
                                onClick={() => setIsEditContOpen(true)}
                            >
                                <img className="pointer" src={edit} />
                            </span>

                            <div className="cont-page-remove">
                                <div className="inner"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-center flex-wrap mt-8">
                        {list.map((item: any) => {
                            return (
                                <div className="item-key my-2">
                                    <p>{item.name} &nbsp; <abbr className="text-black text-[15px]">&times;</abbr></p>
                                </div>
                            );
                        })}
                        <div className="item-key w-9 h-7">
                            <AiOutlinePlus />
                        </div>
                    </div>

                    <div className="flex w-full ">
                        <div className="pt-5 text-gray-400 leading-3 w-full">
                            <p className="text-[13px]">Container key</p>
                            <div className="flex items-center flex-wrap text-[13px] w-full pb-3">
                                <div className="sm:w-6/12 w-full flex items-center">
                                    {item?.container_key}&nbsp;{" "}
                                    <CopyIcon width={"18"} color={"black"} />
                                </div>
                                <div className="sm:w-6/12 w-full flex flex-wrap items-center">
                                    <span className="text-softpasspurple-300 font-semibold mr-4">
                                        Deactivate container
                                    </span>
                                    <span>04/08/2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </CardContainer>

            <EditContainers isOpen={isEditContOpen} closeModal={closeEditContainerModal} />
            <DeactivateContainers isOpen={isDeactivateContOpen} closeModal={closeDeactivateContainerModal} />


        </>

    )
}

let list = [
    {
        name: "BVN",
    },
    {
        name: "NIN",
    },
    {
        name: "Driver Liciens",
    },
    {
        name: "Nigerian international Passport",
    },
    {
        name: "PVC",
    },
];

export default ContainerItem