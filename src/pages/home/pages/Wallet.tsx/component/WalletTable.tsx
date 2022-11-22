import React from "react";
import { ReactComponent as ArrowDown } from "../../../../../assets/image/svg/ArrowDown.svg";
import { ReactComponent as SortAccend } from "../../../../../assets/svg/sort-ascending.svg";

interface Props {}

const WalletTable: React.FC = (props: Props) => {
  const {} = props;

  return (
    <section className="md:px-6 px-3">
      <div className="flex flex-wrap items-center px-3 py-3 bg-gray-100/40">
        <div className="md:w-6/12 sm:w-9/12 flex items-center ">
          <span className="text-sm text-gray-400">Reference</span>
          <b className="table-filter-item">
            Temitayo Abimbola{" "}
            <i className="pt-[3px]">
              <ArrowDown color={"black"} width={"17"} />
            </i>
          </b>
          <span className="table-filter-item">
            Date{" "}
            <i className="pt-[3px]">
              <ArrowDown color={"black"} width={"17"} />
            </i>
          </span>
          <span className="table-filter-item">
            Status{" "}
            <i className="pt-[3px]">
              <ArrowDown color={"black"} width={"17"} />
            </i>
          </span>
        </div>
        <div className="md:w-6/12 sm:w-3/12 text-end">
          <span className="text-[12px] text-softpasspurple-500">
            Clear filter
          </span>
        </div>
      </div>

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

export default WalletTable;
