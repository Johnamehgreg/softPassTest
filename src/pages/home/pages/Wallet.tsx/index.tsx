import React, { useState } from "react";
import ApiCallHistory from "../../../../components/dashboard/widget/ApiCallHistory";
import DashboardTemplate from "../../../../layouts/Dashboard/DashboardTemplate";
import TopCardContainerWallet from "./component/TopContainerWallet";
import WalletTable from "./component/WalletTable";

interface Props {}

function Index(props: Props) {
  const {} = props;

  const [tabs, setTabs] = useState([
    {
      name: "Number of Total calls",
      title: "This month",
      amount: "23",
      type: "regular",
    },
    {
      name: "Number of Total calls",
      title: "This month",
      amount: "23",
      type: "regular",
    },
  ]);

  return (
    <>
      <TopCardContainerWallet tabs={tabs} />
      <section className="bg-white mt-8 garrif">
        <div className="flex items-center px-3 md:px-5 py-4 bg-softpassgray-50 lg:bg-transparent border-b-[1px] border-b-gray-300">
          <h1 className="w-6/12 text-[20px] font-semibold">Wallet Funding History</h1>
          <div className="w-6/12">
            <div className="flex justify-end z-10">
              <b className="border-[12px] border-gray-100 px-3 text-[15px] py-1 text-softpasspurple-300">
              Generate Report
              </b>
            </div>
          </div>
        </div>
        <ApiCallHistory info={tabs}/>

        <WalletTable/>
      </section>
    </>
  );
}

export default Index;
