import React from "react";
import CopyIcon from "../../../../../components/svg-icons/CopyIcon";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";

interface Props {
  isOpen: Boolean;
  closeModal: Function;
}

const ModalModule: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal } = props;

  return isOpen ? (
    <ModalParentModule closeModal={closeModal}>
      <div className="w-full sm:w-[400px]">
        <div className="flex py-3 px-4 w-full items-center border-b-[1px] border-b-gray-200">
          <h4 className="w-full text-[24px]">Fund Wallet</h4>
          <span
            onClick={() => {
              closeModal(false);
            }}
            className="text-[20px] cursor-pointer"
          >
            &times;
          </span>
        </div>

        <div className="px-6 py-3">
          <span className="block w-full opacity-50 text-[15px] my-3">
            Transfer amount to the bank account below
          </span>
          <div className="flex">
            <div className="w-6/12">
              <span className="block w-full font-[200] text-[15px]">
                Bank Name:
              </span>
              <span className="block w-full font-[200] text-[15px]">
                Account Name:
              </span>
              <span className="block w-full font-[200] text-[15px]">
                Account No:
              </span>
            </div>
            <div className="w-6/12">
              <span className="block w-full font-[200] text-[15px]">
                Providus Bank
              </span>
              <span className="block w-full font-[200] text-[15px]">
                Temitayo Abimbola
              </span>
              <span className=" w-full font-[500] text-[15px] flex items-center">
                018942567&nbsp; <CopyIcon width={23} color={"black"}/>
              </span>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex items-center my-4">
              <hr className="w-6/12 border-[1px] border-gray-200"></hr>
              <b className="inline-block px-2 opacity-50">or</b>
              <hr className="w-6/12 border-[1px] border-gray-200"></hr>
            </div>
            <div className="text-[14px] opacity-50">Pay with card</div>

            <form
            onSubmit={(event)=>event.preventDefault()}
            >
              <input
                type="number"
                placeholder="Enter Amount"
                className="my-4 outline-none w-full py-3 px-3 text-[14px] border-[1px] border-gray-200 rounded-md"
              ></input>
              <button className="w-full bg-softpasspurple-300 text-white py-3 rounded-md text-[14px] font-semibold mb-4">
                Pay with Card
              </button>
            </form>
          </div>
        </div>
      </div>
    </ModalParentModule>
  ) : null;
};

export default ModalModule;
