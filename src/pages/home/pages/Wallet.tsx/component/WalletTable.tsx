import dateFormat from "dateformat";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { ReactComponent as SortAccend } from "../../../../../assets/svg/sort-ascending.svg";
import AppTopTableCont from "../../../../../components/AppComponent/AppTopTableCont";

interface Props {
  onError: Function;
  transactionHistory: any,
  setstatus: React.Dispatch<any>,
  itemNum: any,
  setdateRange: React.Dispatch<any>
}

const WalletTable: React.FC<Props> = (props: Props) => {
  const { onError, setdateRange, itemNum, transactionHistory, setstatus } = props;

  const [isShowDate, setisShowDate] = useState(false)

  console.log(itemNum - 10, 'item data value')




  return (
    <>

      <section className="md:px-6 mt-8 px-3">
        <AppTopTableCont
          setdateRange={setdateRange}
          setstatus={setstatus} />

        <div className="w-[100%] overflow-scroll">
          <div className="pt-3 w-auto">
            <table width="100%" className="user-table">
              <thead className="user-table-head">
                <tr className="click-container">
                  <td>
                    <div className="table-item">
                      <span>S/N</span>
                    </div>

                  </td>
                  <td>
                    <div className="table-item">
                      <span>Time</span>
                    </div>

                  </td>
                  <td>
                    {/* <div className="table-item"> */}
                    <span className="flex justify-start w-full  items-center">
                      Date&nbsp; <SortAccend />
                    </span>
                    {/* </div> */}

                  </td>
                  <td>
                    <div className="table-item">
                      <span>Reference</span>
                    </div>

                  </td>
                  <td>
                    <div className="table-item">
                      <span>Amount</span>
                    </div>

                  </td>
                  <td>
                    <div className="table-item">
                      <span>Status</span>
                    </div>

                  </td>
                  <td>
                    <div className="table-item">
                      <span>Payment Gateway</span>
                    </div>

                  </td>
                </tr>
              </thead>
              <tbody className="user-table-body">
                {transactionHistory?.map((item: any, index: number) => {
                  return (
                    <tr className="py-3">
                      <td>
                        <div className="table-item">

                          {

                          }
                          {index + 1 + itemNum - 10}
                        </div>
                      </td>
                      <td>
                        <div className="table-item">
                          {dateFormat(item?.createdDate, "h:MM TT")}
                        </div>
                      </td>

                      <td>
                        {/* <div className="table-item"> */}
                        {dateFormat(item?.createdDate, "dd mmm yyyy")}
                        {/* </div> */}

                      </td>
                      <td>
                        <div className="table-item">
                          {item?.wallet_transaction_reference}
                        </div>
                      </td>

                      <td>

                        <div className={`table-item ${item?.is_in_flow === true ? 'text-green-500' : 'text-red-500'}`}>

                          <CurrencyFormat
                            value={item?.amount}
                            displayType={'text'}
                            thousandSeparator={true}

                            renderText={value => {
                              return (
                                <span >
                                  {
                                    item?.is_in_flow === true ? '' : '- '
                                  }
                                  <span className="ml-1">&#8358; </span>
                                  {value}.00
                                </span>
                              )
                            }} />
                        </div>


                      </td>
                      <td>
                        <div className="table-item">
                          <button
                            className={`px-3 py-1 ${true ? "primary" : "danger"}`}
                          >
                            {item?.status}
                          </button>
                        </div>

                      </td>
                      <td>
                        <div className="table-item ">
                          <p style={{ color: '#4155C8' }}>
                            {
                              item?.payment_method
                            }
                          </p>
                        </div>
                      </td>
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
