import { useFormik } from 'formik';
import React, { useState } from "react";
import * as Yup from 'yup';
import HomeInput from "../../../../../components/input/homeInput";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";
import { useCreateContainer } from './container-query-hook';

interface Props {
  isOpen: Boolean;
  closeModal: Function;
}



const CreateContainers: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal } = props;


  const {submit} = useCreateContainer(closeModal)

  
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
        "container_name": values.containerName
      }
      
      submit(data)

      



    },

  })





  const [containerName, setcontainerName] = useState('')

  return isOpen ? (
    <ModalParentModule closeModal={closeModal}>
      <div className="sm:w-[400px] w-full">
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
            className="text-[20px] cursor-pointer"
          >
            &times;
          </span>
        </div>

        <form onSubmit={formik.handleSubmit} className="w-full flex justify-center pt-6" >
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

            {/* <div className="pt-[2px]"></div>
            <div className="input-contain pl-5">
              <Select placeholder="Select Services">
                {["a", "b", "c"].map((item: any, index: number) => {
                  return <option value={item}>{item}</option>;
                })}
              </Select>
            </div> */}
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
