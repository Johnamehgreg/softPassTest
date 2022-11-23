import { ReactComponent as Copy } from "../../../../../assets/svg/copy.svg";
import { ReactComponent as WalletFund } from "../../../../../assets/svg/fund-wallet.svg";

interface Props {
  tabs: Array<any>;
}

function TopCardContainerTeam(props: Props) {
  const { tabs } = props;

  return (
    <div className="flex flex-wrap ">
      <div className="lg:w-[22%] md:w-[32%] sm:w-[48%] w-full mt-3 details flex mx-1 items-center bg-white px-4 py-4 rounded-sm garrif relative bg-contain">
        <span className="block w-10/12 sm:text-[11px] text-[10px] pb-1">
        You can fund your wallet through card payment or bank transfer
        </span>
        <span className="w-2/12 flex justify-end sm:text-[13px] text-[10px]">
          <WalletFund/>
        </span>
      </div>

      <div className="lg:w-[22%] md:w-[32%] sm:w-[48%] w-full mt-3 details flex mx-1 items-center bg-white px-4 py-4 rounded-sm garrif relative bg-contain">
        <span className="block w-10/12 sm:text-[13px] text-[10px] pb-1">
          <abbr className="text-[11px] font-normal">Providus Bank Acct</abbr>
          <b className="text-[17px] block w-full font-normal">018942567</b>
        </span>
        <span className="w-2/12 flex justify-end sm:text-[13px] text-[10px]">
          <Copy/>
        </span>
      </div>

      <div className="wallet-container">
        <div className="">
          <b className="text-[12px] font-normal block">Total Wallet Balance</b>
          <span className="font-semibold text-softpasspurple-300 text-[18px]">
            N 40,000.00
          </span>
        </div>
        <div>
          <button className="text-[12px] bg-softpasspurple-300 text-white whitespace-nowrap p-2 py-1 pb-[5px] rounded-md">
            Fund Wallet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopCardContainerTeam;
