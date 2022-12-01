import React, { useEffect, useState } from "react";
import { useGetServices } from '../../../../../app-query-hook/use-services-hook';
import CustomSelect from '../../../../../components/CustomSelect';
import ModalParentModule from "../../../../../components/widget/ModalParentModule";
import { useServicesEvent } from "./container-query-hook";

interface Props {
  isOpen: Boolean;
  closeModal: Function;
  refetch: Function;
  item:any
}



const AddContainerServices: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal, item, refetch } = props;

  const [serviceList, setserviceList] = useState<any>([])



  const { data, isSuccess, isFetched } = useGetServices()
  const [services, setservices] = useState<string>('')


  const checkSuccess = () => {
    if (isSuccess && isFetched) {

      let list = data?.data.map((item: any) => {
        return { label: item?.service_name, value: item?._id }
      })
      setserviceList(list)
    }
  }

  useEffect(() => {
    checkSuccess()
  }, [data])

  const {addService} = useServicesEvent({closeModal, refetch})


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(services === '') return null

    let data = {
      "container_id":item?._id,
      "service_id":services
  }

    addService(data)
  }



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

            
            <CustomSelect onChange={(e) => setservices(e)} placeholder='Select Services' options={serviceList} />

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
