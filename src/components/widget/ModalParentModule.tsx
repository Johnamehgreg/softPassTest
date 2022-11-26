import React, { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  closeModal: Function;
}

function ModalParentModule(props: Props) {
  const { closeModal, children } = props;
  const ref = useRef(null);

  //function
  const closeDropDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget == event.target) closeModal(false);
  };

  return (
    <div
      onClick={(event) => {
        closeDropDown(event);
      }}
      ref={ref}
      className="fixed z-50 top-0 left-0 w-full h-full bg-black/40
       flex justify-center sm:items-center items-end routes-container"
    >
      <div
        className="bg-white rounded-md max-w-[600px] sm:min-w-[250px]
       w-full sm:w-auto sm:min-h-[100px] sm:max-h-[100vh] sm:h-auto h-[70vh]
        flex-none overflow-y-auto"
      >
        { children }
      </div>
    </div>
  );
}

export default ModalParentModule;
