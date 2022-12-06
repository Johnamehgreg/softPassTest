import dateFormat from "dateformat";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { ReactComponent as SortAccend } from "../../../../../assets/svg/sort-ascending.svg";
import AppTopTableCont from "../../../../../components/AppComponent/AppTopTableCont";

interface Props {
  onError: Function;
  transactionHistory:any,
  setstatus:React.Dispatch<any>,
  itemNum:any,
  setdateRange: React.Dispatch<any>
}

const WalletTable: React.FC<Props> = (props: Props) => {
  const { onError, setdateRange, itemNum, transactionHistory, setstatus } = props;

  const [isShowDate, setisShowDate] = useState(false)




  return (
    <>

      <section className="md:px-6 px-3">
        <AppTopTableCont 
        setdateRange={setdateRange}
        setstatus={setstatus} />

        <div className="w-[100%] overflow-scroll">
          <div className="pt-3 w-auto">
            <table width="100%" className="user-table">
              <thead className="user-table-head">
                <tr className="click-container">
                  <td>
                    <span>S/N</span>
                  </td>
                  <td>
                    <span>Time</span>
                  </td>
                  <td>
                    <span className="flex justify-start w-full  items-center">
                      Date&nbsp; <SortAccend />
                    </span>
                  </td>
                  <td>
                    <span>Reference</span>
                  </td>
                  <td>
                    <span>Amount</span>
                  </td>
                  <td>
                    <span>Status</span>
                  </td>
                  <td>
                    <span>Payment Gateway</span>
                  </td>
                </tr>
              </thead>
              <tbody className="user-table-body">
                {transactionHistory?.map((item: any, index: number) => {
                  return (
                    <tr className="py-3">
                      <td>{index + itemNum}</td>
                      <td>{dateFormat(item?.createdDate, "h:MM TT")}</td>

                      <td>{dateFormat(item?.createdDate, "dd mmm yyyy")}</td>
                      <td>{item?.wallet_transaction_reference}</td>

                      <td>
                        <CurrencyFormat
                          value={item?.amount}
                          displayType={'text'}
                          thousandSeparator={true}

                          renderText={value => {
                            return (
                              <span className="">
                                <span>&#8358; </span>
                                {value}.00
                              </span>
                            )
                          }} />
                      </td>
                      <td>
                        <button
                          className={`px-3 py-1 ${true ? "primary" : "danger"}`}
                        >
                          {item?.status}
                        </button>
                      </td>
                      <td>Card Payment</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>


    

    </>
  );
};

export default WalletTable;
