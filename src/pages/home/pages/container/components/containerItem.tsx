import { motion, useAnimation } from "framer-motion";
import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import edit from '../../../../../assets/svg/edit.svg';
import AppCopy from "../../../../../components/AppComponent/AppCopy";
import AppDeleteModal from "../../../../../components/AppComponent/AppDeleteModal";
import CopyIcon from "../../../../../components/svg-icons/CopyIcon";
import AddContainerServices from "../modals/AddServices";
import { useGetServiceByContainer, useServicesEvent } from "../modals/container-query-hook";
import DeactivateContainers from "../modals/DeactivateContainerModal";
import EditContainers from "../modals/EditContainerModal";



interface Props {
    item: any;
    refetch: Function
}

const ContainerItem: React.FC<Props> = ({ item, refetch }) => {
    let date = moment(item?.createdAt).format('d/m/yyyy')

    const [servicesList, setservicesList] = useState([])

    const [isColase, setisColase] = useState(true)

    const [isEditContOpen, setIsEditContOpen] = useState(false)
    const [isDeactivateContOpen, setIsDeactivateContOpen] = useState(false)
    const [isDeleteServiceOpen, setisDeleteServiceOpen] = useState(false)
    const [isAddServiceOpen, setisAddServiceOpen] = useState(false)
    const [serviceIndex, setserviceIndex] = useState(0)
    const closeDeactivateContainerModal = (val: boolean) => {
        setIsDeactivateContOpen(val)
    }

    const closeEditContainerModal = (val: boolean) => {
        setIsEditContOpen(val)
    }

    const onError = () => {

    }

    const { isSuccess, refetch: serviceRefetch, isFetched, data } = useGetServiceByContainer({ onError, containerId: item._id })

    const { deleteService } = useServicesEvent({ refetch: serviceRefetch, closeModal: () => setisDeleteServiceOpen(false) })

    const checkSuccess = () => {

        if (isFetched && isSuccess) {
            setservicesList(data?.data)


        }
    }

    const handleServicesDelete = () => {
        let serviceId: any = servicesList[serviceIndex]

        deleteService({ servicesId: serviceId.service_id.id, containerId: item._id })



    }


    useEffect(() => {
        checkSuccess()
    }, [data])

    const ani1 = useAnimation()

    useEffect(() => {

        if (isColase) {
            ani1.start({
                x: 0,
                height: '40px',
                transition: {
                    type: 'spring',
                    duration: 0.5,

                    // bounce: 0.3
                }
            })
        } else {
            ani1.start({
                x: 0,
                height: 'auto',
                transition: {
                    type: 'spring',
                    duration: 0.5,
                    // bounce: 0.3
                }
            })
        }
    }, [isColase])




    return (
        <>
            <motion.div
                animate={{
                    x: 0,
                    height: 'auto',
                    transition: {
                        type: 'spring',
                        duration: 0.5,
                        // bounce: 0.3
                    }
                }}
                //  animate={ani1}
                className="container-page-card px-4 overflow-x-hidden py-4 my-5">
                <>
                    <div key={item?._id} className="flex justify-between w-full py-3">
                        <h2>
                            {item?.container_name}
                        </h2>

                        <div className=" flex items-center justify-center ">

                            {
                                isColase && (

                                    <div className="text-gray-400  hidden md:flex w-[200px] flex-col justify-center mr-4">
                                        <p className="text-[12px]">Container key</p>
                                        <p className=" text-[13px]">
                                            {item?.container_key.slice(0, 25)}&nbsp;{" "}
                                        </p>
                                    </div>
                                )

                            }


                            {
                                isColase && (
                                    <AppCopy text={item?.container_key} >
                                        <CopyIcon width={"18"} color={"black"} />
                                    </AppCopy>

                                )
                            }
                            <span
                                onClick={() => setIsEditContOpen(true)}
                            >
                                <img className="pointer" src={edit} />
                            </span>



                            {
                                isColase ?
                                    <button
                                        onClick={() => setisColase(false)}
                                        className="w-6 ml-8 h-7 flex justify-center items-center rounded-md bg-gray-200">
                                        <AiOutlinePlus fill="black" />
                                    </button>
                                    :

                                    <div
                                        onClick={() => setisColase(true)}
                                        className="ml-8 cont-page-remove pointer">
                                        <div className="inner"></div>
                                    </div>

                            }


                        </div>
                    </div>

                    {
                        !isColase && (
                            <div className="flex w-full items-center flex-wrap mt-8">
                                {servicesList.map((item: any, index) => {
                                    return (
                                        <div className="item-key my-2">
                                            <p>{item.service_id.service_name} &nbsp; <abbr
                                                onClick={() => {
                                                    setisDeleteServiceOpen(true)
                                                    setserviceIndex(index)
                                                }}
                                                className="text-black pointer text-[15px]">&times;</abbr></p>
                                        </div>
                                    );
                                })}
                                <div onClick={() => setisAddServiceOpen(true)} className="item-key w-9 pointer h-7">
                                    <AiOutlinePlus />
                                </div>
                            </div>
                        )
                    }

                    {
                        !isColase && (

                            <div className="flex w-full ">
                                <div className="pt-5 text-gray-400 leading-3 w-full">
                                    <p className="text-[13px]">Container key</p>
                                    <div className="flex items-center flex-wrap text-[13px] w-full pb-3">
                                        <div className="sm:w-6/12 w-full flex items-center">
                                            {item?.container_key}&nbsp;{" "}
                                            <AppCopy text={item?.container_key} >
                                                <CopyIcon width={"18"} color={"black"} />
                                            </AppCopy>
                                        </div>

                                        <div className="sm:w-6/12 w-full flex flex-wrap items-center">
                                            {
                                                item?.is_active === true ?

                                                    <span
                                                        onClick={() => setIsDeactivateContOpen(true)}
                                                        className="text-softpasspurple-300 font-semibold pointer mr-4">
                                                        Deactivate container
                                                    </span>

                                                    :

                                                    <span
                                                        onClick={() => setIsDeactivateContOpen(true)}
                                                        className="text-softpasspurple-300 font-semibold pointer mr-4">
                                                        Activate container
                                                    </span>
                                            }
                                            <span>{date}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </>
            </motion.div>
            <EditContainers item={item} refetch={refetch} isOpen={isEditContOpen} closeModal={closeEditContainerModal} />
            <DeactivateContainers refetch={refetch} item={item} isOpen={isDeactivateContOpen} closeModal={closeDeactivateContainerModal} />
            <AppDeleteModal onDelete={() => handleServicesDelete()} item={servicesList[serviceIndex]} isOpen={isDeleteServiceOpen} closeModal={() => setisDeleteServiceOpen(false)} />
            <AddContainerServices list={servicesList} item={item} refetch={serviceRefetch} isOpen={isAddServiceOpen} closeModal={() => setisAddServiceOpen(false)} />


        </>

    )
}



export default ContainerItem