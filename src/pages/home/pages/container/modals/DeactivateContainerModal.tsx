import React from "react";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";
import { useCreateContainer } from "./container-query-hook";

interface Props {
  isOpen: Boolean;
  closeModal: Function;
  item: any;
  refetch:Function
}

const DeactivateContainers: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal, item, refetch } = props;

  const { disActiveContainers } = useCreateContainer(closeModal)


  return isOpen ? (
    <ModalParentModule closeModal={closeModal}>
      <div className="sm:w-[400px] w-full">
        <div className="flex py-6 px-4 w-full pb-6 items-center border-b-[1px] border-b-gray-200">
          <h4 className="w-full text-[20px] font-bold text-softpasspurple-500">
            {item?.is_active ? 'Deactivate' : 'Activate'}
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
               <div className="w-full text-[15px] opacity-50">Are you sure you want to  {item?.is_active ? 'deactivate' : 'activate'} {item?.container_name}?</div>
            <div className="w-full text-center py-3 garrif">
              <button
              onClick={() =>  disActiveContainers({ containerId:item?._id, refetch, isActive:item?.is_active })}
              className="next-button">Yes, I’m Sure</button>
            </div>
            <div className="w-full text-center py-0 garrif mb-3">
              <button 
              onClick={() => closeModal()}
              className="border-softpasspurple-300 border text-softpasspurple-300 w-full py-[10px] rounded-md">
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
