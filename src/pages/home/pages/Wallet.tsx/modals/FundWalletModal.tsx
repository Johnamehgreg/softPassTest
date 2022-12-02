import React, { useState } from "react";
import CurrencyFormat from 'react-currency-format';
import CopyIcon from "../../../../../components/svg-icons/CopyIcon";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";
import { useWalletEvent } from "../wallet-query-hook";

interface Props {
  isOpen: Boolean;
  closeModal: Function;
  refetch: Function;
}

const ModalModule: React.FC<Props> = (props: Props) => {
  const { isOpen, closeModal, refetch } = props;

  const [amount, setamount] = useState('')
  const [url, seturl] = useState('')

  const [showIframe, setshowIframe] = useState(false)

  const { initializeWallet } = useWalletEvent(closeModal)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let data = {
      "amount": amount
    }

    const onIframeLoad = (data: any) => {
      seturl(data?.authorization_url)
      setshowIframe(true)

      console.log(data.authorization_url, 'return response data')
    }

    initializeWallet(data, refetch, onIframeLoad)


  }



  return isOpen ? (
    <ModalParentModule closeModal={closeModal}>
      {
        showIframe && (
          <div className="w-full h-full fixed z-30 top-0 flex items-center justify-center left-0 bg-black/40">
            <div className="h-[90%] w-[90%] rounded-md bg-white  relative  ">
            <span
            onClick={() => {
              setshowIframe(false)
            }}
            className="text-[20px] modal-close-icon cursor-pointer"
          >
            &times;
          </span>
              <iframe src={url} height="100%" width="100%">

              </iframe>
            </div>

          </div>
        )
      }
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
                018942567&nbsp; <CopyIcon width={23} color={"black"} />
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
              onSubmit={handleSubmit}
            >
              <CurrencyFormat
                value={amount}
                className="my-4 outline-none w-full py-3 px-3 text-[14px] border-[1px] border-gray-200 rounded-md"
                thousandSeparator={true}
                prefix={'₦ '}
                required
                placeholder="Enter Amount"
                onValueChange={(values) => {
                  const { formattedValue, value } = values;
                  setamount(value)


                }} />
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
