import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useGetServices } from '../../../../../app-query-hook/use-services-hook';
import ModalParentModule from "../../../../../components/widget/ModalParentModule";
import { useServicesEvent } from "./container-query-hook";
interface Props {
  isOpen: Boolean;
  closeModal: Function;
  refetch: Function;
  item: any,
  list:any
}



const AddContainerServices: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal, item, list, refetch } = props;

  const [serviceList, setserviceList] = useState<any>([])



  const { data, isSuccess, isFetched } = useGetServices()
  const [services, setservices] = useState<any>([])
  const [showDropDown, setshowDropDown] = useState(true)
  const [servicesData, setservicesData] = useState('')



  const ani1 = useAnimation()
  const arrowAni = useAnimation()

  const checkSuccess = () => {
    if (isSuccess && isFetched) {

      let list1 = data?.data.map((item: any) => {
        return { label: item?.service_name, value: item?._id }
      })
      let list2 = list.map((item: any) => {
        return { label: item?.service_id?.service_name, value: item?.service_id?.id }
      })

      const myArrayFiltered = list1?.filter((el: any) => {
        return list1.some((f: any) => {
            return f?.label === el?.label;
        });
    });
    setserviceList(list1)

    console.log('@asset have change', list2)


      
    }
  }



  useEffect(() => {
    checkSuccess()
  }, [data])

  const { addService } = useServicesEvent({ closeModal, refetch })


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (services === '') return null

    let data = {
      "container_id": item?._id,
      "services": services
    }

    addService(data)
  }



  useEffect(() => {
    if (showDropDown) {
      ani1.start({
        x: 0,
        height: '40px',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    } else {
      ani1.start({
        x: 0,
        height: 'auto',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    }
    if (showDropDown) {
      arrowAni.start({
        x: 0,
        rotate: '0deg',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    } else {
      arrowAni.start({
        x: 0,
        rotate: '180deg',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    }
  }, [showDropDown])


  const handleOnClick = (item: any) => {
    console.log(item)
    let newList = serviceList.map((obj: any) => {
      if (item.value === obj.value) {
        return { ...item, isSelected: !obj.isSelected }
      }

      return obj
    })
    setserviceList(newList)
  }


  useEffect(() => {
    let newListData = serviceList
    .filter((i:any) => i.isSelected === true )
    .map((item :any) => {
      return item.label
    }).toString()
    setservicesData(newListData)

    let jayList = serviceList
    .filter((i:any) => i.isSelected === true )
    .map((obj :any) => {
      return {
      "container_id":item?._id,
      "service_id": obj?.value}
    })

    setservices(jayList)
    console.log(jayList, '@all deta available')
  }, [serviceList])
  



  return isOpen ? (
    <ModalParentModule closeModal={closeModal}>
      <div className="sm:w-[400px] w-full">
        <div className="flex py-6 px-4 w-full pb-6 items-center border-b-[1px] border-b-gray-200">
          <h4 className="w-full text-[20px] text-softpasspurple-500 font-bold">
            Create a service
            <span className="w-full text-[12px] block opacity-50 font-normal">
              Select services you'd like to add to this container
            </span>
          </h4>
          <span
            onClick={() => {
              closeModal(false);
            }}
            className="text-[20px] modal-close-icon cursor-pointer"
          >
            &times;
          </span>
        </div>

        <form onSubmit={onSubmit} className="w-full flex justify-center pt-2" >
          <div className="w-10/12">

            <div className=" text-softpasspurple-300 relative">

              <motion.div
                animate={ani1}
                className="  px-2  overflow-y-hidden e w-full border-[1px] rounded-md border-gray-300">
                <div onClick={() => setshowDropDown(!showDropDown)} className=" pointer overflow-scroll flex w-full justify-between h-[40px] items-center ">
                  <p className="text-gray-400 text-[14px]"> {servicesData  ? servicesData : 'Select Services '}</p>
                  <motion.div animate={arrowAni} >
                    <MdKeyboardArrowDown color="#33106B" size={20} />
                  </motion.div>

                </div>


                <div className={` z-50 py-4 md:-left-full`}>

                  <div>
                    {serviceList?.map((item: any, index: number) => {
                      return (
                        <div
                          className={`${item?.isSelected ? 'bg-gray-100' : 'bg-white'} py-1 items-center rounded-[5px] mb-1 px-2  pointer min-h-[30px] flex`}
                          key={"selectId" + item.value}
                          onClick={() => {
                            handleOnClick(item)
                          }}
                        >

                          {
                            item?.isSelected === true ?
                              // <HiCheckCircle color="#E1227B" size={20} />
                              <div className="h-[18px] flex items-center justify-center w-[18px] rounded-md bg-softpasspurple-300">
                                <BsCheck color="#fff" />
                              </div>
                              :
                              <div className="h-[18px] w-[18px] rounded-md border-gray-300 border-[1px] bg-white">

                              </div>
                          }


                          <p className="text-gray-500 text-[13px] ml-2"> {item?.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* ${!showDropDown ? 'hidden' : 'block'} */}
              {/* border-gray-100 */}



            </div>


            {/* <CustomSelect onChange={(e) => setservices(e)} placeholder='Select Services' options={serviceList} /> */}

            <div className="w-full text-center py-3 garrif">
              <button
                type="submit"
                className="next-button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </ModalParentModule>
  ) : null;
};

export default AddContainerServices;
