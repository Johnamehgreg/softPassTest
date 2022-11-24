import { Select } from "@chakra-ui/react";
import React from "react";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";

interface Props {
  isOpen: Boolean;
  closeModal: Function;
}

const DeactivateContainers: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal } = props;

  return isOpen ? (
    <ModalParentModule closeModal={closeModal}>
      <div className="sm:w-[400px] w-full">
        <div className="flex py-6 px-4 w-full pb-6 items-center border-b-[1px] border-b-gray-200">
          <h4 className="w-full text-[20px] font-bold text-softpasspurple-500">
            Deactivate
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

        <div
          className="w-full flex justify-center pt-6"
        >
          <div className="w-10/12 pb-5">
               <div className="w-full text-[15px] opacity-50">Are you sure you want to deactivate Soft Pass?</div>
            <div className="w-full text-center py-3 garrif">
              <button className="next-button">Yes, I’m Sure</button>
            </div>
            <div className="w-full text-center py-0 garrif mb-3">
              <button className="border-softpasspurple-300 border text-softpasspurple-300 w-full py-[10px] rounded-md">
              No, I’m not Sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalParentModule>
  ) : null;
};

export default DeactivateContainers;
