import { useEffect, useState } from "react";
import AppPagination from "../../../../components/AppComponent/AppPagination";
import AppRetching from "../../../../components/AppComponent/AppRetching";
import AppWrapper from "../../../../components/AppWrapper";
import ApiCallHistory from "../../../../components/dashboard/widget/ApiCallHistory";
import TopCardContainerWallet from "./component/TopContainerWallet";
import WalletTable from "./component/WalletTable";
import { useGetWalletHook, useWalletTransactionHistory } from "./wallet-query-hook";

interface Props { }

function Wallet(props: Props) {
  const { } = props;

  const [isOpen, setIsOpen] = useState(true)

  const [errorText, seterrorText] = useState('Retry')
  const [isError, setisError] = useState(false)
  const [isSuccess, setisSuccess] = useState(false)
  const [amountBalance, setamountBalance] = useState(0)
  const [skip, setskip] = useState(1)
  const [transactionHistory, settransactionHistory] = useState([])
  const [pagiData, setpagiData] = useState({})
  const [status, setstatus] = useState<any>(null)
  const [itemNum, setitemNum] = useState(0)

  

  const [dateRange, setdateRange] = useState<any>({
    startDate: null,
    endDate: null
  })


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

  const onError = () => {
    setisError(true)
    setisSuccess(false)
    seterrorText('Retry')

  }


  const {

    data,
    isFetched,
    isError: isErrorData,
    isSuccess: isDataSuccess,
    isFetching,
    refetch
  } = useGetWalletHook({ onError })
  const onRefetch = () => {
    refetch()
    seterrorText('Retrying...')
  }

  const {
    data: transactionData,
    isSuccess: transactionSuccess,
    isFetched: transactionIsfetched,
    isFetching:isFetchingTrans
  } = useWalletTransactionHistory({ onError, skip, status, dateRange })

  const checkSuccess = () => {

    if (isFetched && isDataSuccess) {
      setisError(false)
      setisSuccess(true)

      setamountBalance(data?.data?.balance)
      
    }

    if (transactionSuccess && transactionIsfetched) {
      settransactionHistory(transactionData?.data?.results)
      setpagiData(transactionData?.data)
      setitemNum(skip * 10)
      console.log(data.data, 'sucess data transaction')
    }
  }


  useEffect(() => {
    checkSuccess()
  }, [data, transactionData])





  return (
    <AppWrapper
      errorText={errorText}
      onRefetch={() => onRefetch()}
      isSuccess={isSuccess}
      isError={isError}

    >

      <>

        <TopCardContainerWallet amountBalance={amountBalance} refetch={refetch} tabs={tabs} />
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
          <ApiCallHistory info={tabs} />

          <AppRetching isFetching={isFetchingTrans} />
          <WalletTable 
          setdateRange={setdateRange}
          itemNum={itemNum}
          setstatus={setstatus}
          transactionHistory={transactionHistory} 
          onError={() => onError()} />
        </section>

        <AppPagination setskip={setskip} data={pagiData} />
      </>






    </AppWrapper>
  );
}

export default Wallet;
