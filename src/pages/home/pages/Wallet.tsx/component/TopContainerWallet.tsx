import { useState } from "react";
import { ReactComponent as Copy } from "../../../../../assets/svg/copy.svg";
import { ReactComponent as WalletFund } from "../../../../../assets/svg/fund-wallet.svg";
import AppBalanceCard from "../../../../../components/AppComponent/AppBalanceCard";
import FundWalletModal from "../modals/FundWalletModal";


interface Props {
  tabs: Array<any>;
  refetch: Function;
  amountBalance: any
}

function TopCardContainerWallet(props: Props) {
  const { tabs, refetch, amountBalance } = props;

  //VARIABLE
  const [isOpen, setIsOpen] = useState(false)

  //FUNCTION
  const closeModal = (val: boolean) => {
    setIsOpen(val)
  }





  return (
    <div className="flex flex-wrap ">
      <div className="lg:w-[22%] md:w-[32%] sm:w-[48%] w-full mt-3 details flex mx-1 items-center bg-white px-4 py-4 rounded-sm garrif relative bg-contain">
        <span className="block w-10/12 sm:text-[11px] text-[10px] pb-1">
          You can fund your wallet through card payment or bank transfer
        </span>
        <span className="w-2/12 flex justify-end sm:text-[13px] text-[10px]">
          <WalletFund />
        </span>
      </div>

      <div className="lg:w-[22%] md:w-[32%] sm:w-[48%] w-full mt-3 details flex mx-1 items-center bg-white px-4 py-4 rounded-sm garrif relative bg-contain">
        <span className="block w-10/12 sm:text-[13px] text-[10px] pb-1">
          <abbr className="text-[11px] font-normal">Providus Bank Acct</abbr>
          <b className="text-[17px] block w-full font-normal">********</b>
        </span>
        <span className="w-2/12 flex justify-end sm:text-[13px] text-[10px]">
          <Copy />
        </span>
      </div>




      <AppBalanceCard showisFundWallet={() => setIsOpen(true)} />

      <FundWalletModal refetch={refetch} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default TopCardContainerWallet;
