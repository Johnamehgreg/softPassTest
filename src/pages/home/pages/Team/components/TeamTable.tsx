import React, { useState } from "react";
import { ReactComponent as SortAccend } from "../../../../../assets/svg/sort-ascending.svg";
import AppTopTableCont from "../../../../../components/AppComponent/AppTopTableCont";

interface Props { }

const TeamTable: React.FC = (props: Props) => {
  const { } = props;
  const [status, setstatus] = useState<any>(null)
  const [dateRange, setdateRange] = useState<any>({
    startDate: null,
    endDate: null
  })

  return (
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
                  <div className="table-item">
                    <span>Time</span>
                  </div>

                </td>
                <td>
                  <div className="table-item">
                    <span className="flex items-center justify-center\">
                      Date&nbsp; <SortAccend />
                    </span>
                  </div>

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
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any, index: number) => {
                return (
                  <tr className="py-3">
                    <td>
                      0{index + 1}

                    </td>
                    <td>
                      <div className="table-item">
                        09:00
                      </div>
                    </td>
                    <td>
                      <div className="table-item">
                        19 July 2022
                      </div>

                    </td>
                    <td>
                      <div className="table-item">
                        Temitayo Abimbola
                      </div>
                    </td>
                    <td>
                      <div className="table-item">
                        N20, 0000
                      </div>
                    </td>
                    <td>
                      <div className="table-item">
                        <button
                          className={`px-3 py-1 ${true ? "primary" : "danger"}`}
                        >
                          {true ? "Successfull" : "Failed"}
                        </button>
                      </div>

                    </td>
                    <td>
                      <div className="table-item">
                        Card Payment
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
  );
};

export default TeamTable;
