import React, { useState } from "react";
import { ReactComponent as SortAccend } from "../../../../../assets/svg/sort-ascending.svg";
import AppTopTableCont from "../../../../../components/AppComponent/AppTopTableCont";

interface Props {}

const TeamTable: React.FC = (props: Props) => {
  const {} = props;
  const [status, setstatus] = useState<any>(null)

  return (
    <section className="md:px-6 px-3">
     <AppTopTableCont setstatus={setstatus} />

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
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item: any, index: number) => {
                return (
                  <tr className="py-3">
                    <td>0{index + 1}</td>
                    <td>09:00</td>
                    <td>19 July 2022 </td>
                    <td>Temitayo Abimbola</td>
                    <td>N20, 0000</td>
                    <td>
                      <button
                        className={`px-3 py-1 ${true ? "primary" : "danger"}`}
                      >
                        {true ? "Successfull" : "Failed"}
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
  );
};

export default TeamTable;
