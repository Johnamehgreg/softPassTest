import { useFormik } from 'formik';
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useGetServices } from '../../../../../app-query-hook/use-services-hook';
import SelectMultiServices from '../../../../../components/dashboard/widget/selectMultiServices';
import HomeInput from "../../../../../components/input/homeInput";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";
import { popType, showPopUp } from '../../../../../constanst/popupFunc';
import { useCreateContainer } from './container-query-hook';

interface Props {
  isOpen: Boolean;
  closeModal: Function;
  refetch: Function;

}



const CreateContainers: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal, refetch } = props;

  const [serviceList, setserviceList] = useState<any>([])



  const { data, isSuccess, isFetched } = useGetServices()
  const [services, setservices] = useState<any>([])


  const checkSuccess = () => {
    if (isSuccess && isFetched) {

      let list = data?.data.map((item: any) => {
        return { label: item?.service_name, value: item?._id, isSelected: false };
      })
      setserviceList(list)
    }
  }

  useEffect(() => {
    checkSuccess()
  }, [data])


  const { submit } = useCreateContainer(closeModal,)


  const validate = Yup.object({
    containerName: Yup.string()
      .required('Container name is required'),

  })


  const formik = useFormik({
    initialValues: {
      containerName: '',
    },
    validationSchema: validate,

    onSubmit: values => {

      const data = {
        "container_name": values.containerName,
        "services": services
      }

      if (services.length === 0) return showPopUp({ type: popType.error, message: "Service is required" })

      // return console.log(data)

      submit(data, refetch)

    },

  })




  return isOpen ? (
    <ModalParentModule closeModal={closeModal}>
      <div className="sm:w-[400px] overflow-scroll w-full">
        <div className="flex py-6 px-4 w-full pb-6 items-center border-b-[1px] border-b-gray-200">
          <h4 className="w-full text-[20px] text-softpasspurple-500 font-bold">
            Create a container
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

        <form onSubmit={formik.handleSubmit} className="w-full flex justify-center pt-2" >
          <div className="w-10/12">

            <HomeInput
              name='containerName'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.containerName}
              // onChange={(e) => console.log(e.target.value)} 
              placeholder="Name of Contaner"
            />
            {formik.touched.containerName && formik.errors.containerName ? (
              <p className='text-red-700	text-sm' >{formik.errors.containerName}</p>
            ) : null}

            {/* <CustomSelect onChange={(e) => setservices(e)} placeholder='Select Services' options={serviceList} /> */}


            <SelectMultiServices options={serviceList} onChange={(e: any) => setservices(e)} />


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

export default CreateContainers;
