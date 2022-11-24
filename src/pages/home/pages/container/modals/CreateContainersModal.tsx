import { Select } from "@chakra-ui/react";
import React from "react";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";

interface Props {
  isOpen: Boolean;
  closeModal: Function;
}

const CreateContainers: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal } = props;

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

        <form className="w-full flex justify-center pt-6" onSubmit={(event)=>{event.preventDefault()}}>
         <div className="w-10/12">
         <div className="input-contain">
            <input
              required
              type="text"
              placeholder="Name of Container"
            ></input>
          </div>
            <div className="pt-[2px]"></div>
          <div className="input-contain pl-5">
            <Select placeholder="Select Services">
              {["a", "b", "c"].map((item: any, index: number) => {
                return <option value={item}>{item}</option>;
              })}
            </Select>
          </div>
          <div className="w-full text-center py-3 garrif">
            <button className="next-button">Submit</button>
          </div>
         </div>
        </form>
      </div>
    </ModalParentModule>
  ) : null;
};

export default CreateContainers;
