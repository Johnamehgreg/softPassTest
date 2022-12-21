import dateFormat from "dateformat";
import jsPDF from 'jspdf';
import "jspdf-autotable";
import { useContext, useEffect, useState } from "react";
import AppPagination from "../../../../components/AppComponent/AppPagination";
import AppRetching from "../../../../components/AppComponent/AppRetching";
import AppWrapper from "../../../../components/AppWrapper";
import ApiCallHistory from "../../../../components/dashboard/widget/ApiCallHistory";
import { AppProvider } from "../../../../contextProvide/AppContext";
import TopCardContainerWallet from "./component/TopContainerWallet";
import WalletTable from "./component/WalletTable";
import { useGetWalletHook, useWalletTransactionHistory } from "./wallet-query-hook";

interface Props { }

function Wallet(props: Props) {
  const { } = props;

  // const pdfRef = React.createRef();


  const [isOpen, setIsOpen] = useState(true)

  const [errorText, seterrorText] = useState('Retry')
  const [isError, setisError] = useState(false)
  const [isSuccess, setisSuccess] = useState(false)
  const [amountBalance, setamountBalance] = useState(0)
  const [skip, setskip] = useState(1)
  const [transactionHistory, settransactionHistory] = useState<any>([])
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
    isFetching: isFetchingTrans
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
      console.log(transactionData, 'sucess data transaction')
    }
  }


  useEffect(() => {
    checkSuccess()
  }, [data, transactionData])

  const { settopNavData } = useContext(AppProvider)



  useEffect(() => {
    settopNavData({
      title: 'Wallet',
      message: 'Fund your wallet to enjoy seemless verification',
    })
  }, [])





  const print = () => {
    const pdf: any = new jsPDF("p", "pt", "a4");
    const columns = [
      "S/N",
      // "Time",
      "Date",
      "Reference",
      "Amount",
      "Status",
      "Payment Gateway",
    ];
    var rows = [];

    for (let i = 0; i < transactionHistory.length; i++) {

      var temp = [
        i + 1,
        // `${dateFormat(transactionHistory[i]?.createdDate, "h:MM TT")}`,
        `${dateFormat(transactionHistory[i]?.createdDate, "dd mmm yyyy")}`,
        transactionHistory[i]?.wallet_transaction_reference,
        `${transactionHistory[i]?.is_in_flow === true ? '' : '-'}  N${transactionHistory[i]?.amount}`,
        transactionHistory[i]?.status,
        transactionHistory[i]?.payment_method,
      ];
      rows.push(temp);
    }
    pdf.text(235, 40, "Softpass Wallet Funding History");
    pdf.autoTable(columns, rows, {
      startY: 65,
      theme: "grid",
      styles: {
        font: "times",
        halign: "center",
        cellPadding: 3.5,
        lineWidth: 0.5,
       
        textColor: [0, 0, 0]
      },
      headStyles: {
        textColor: [0, 0, 0],
        fontStyle: "normal",
        lineWidth: 0.5,
       
        fillColor: [88, 85, 332]
      },

      rowStyles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0]
      },
      tableLineColor: [0, 0, 0]
    });
    console.log(pdf.output("datauristring"));
    pdf.save("pdf");
  };






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
                <div className="border-[12px] rounded-md border-gray-100">
                  <button
                    onClick={() => print()}
                    className="text-softpasspurple-300 rounded-md text-sm px-2 py-2 bg-white">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {
            transactionHistory.length > 0 && (
              <div className="pb-12 mt-8 md:px-12" id="divToPrint">
                <ApiCallHistory info={tabs} />

                <AppRetching isFetching={isFetchingTrans} />
                <WalletTable
                  setdateRange={setdateRange}
                  itemNum={itemNum}
                  setstatus={setstatus}
                  transactionHistory={transactionHistory}
                  onError={() => onError()} />
              </div>
            )
          }


          {
            isFetched && isDataSuccess && transactionHistory.length === 0 && (
              <div className="flex flex-col items-center h-[100px] justify-center">
                <p className="text-center text-gray-400 text-sm">
                  You currently have no  transaction
                </p>
              </div>
            )
          }
        </section>

        <AppPagination setskip={setskip} data={pagiData} />
      </>






    </AppWrapper>
  );
}

export default Wallet;
