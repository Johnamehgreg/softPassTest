import CurrencyFormat from "react-currency-format"

const ReportTable = () => {
    return (
        <>

            <section className="m">
                <div className="w-[100%] overflow-scroll">
                    <div className="pt-3 w-auto">
                        <table width="100%" className="user-table ">
                            <thead className="user-table-head">
                                <tr className="click-container bg-gray-100/40 px-8">
                                    <td>
                                        <span>S/N</span>
                                    </td>
                                    <td className=" px-8">
                                        <span>Date/Time</span>
                                    </td>

                                    <td>
                                        <span>API Call</span>
                                    </td>
                                    <td>
                                        <span>Transaction Type</span>
                                    </td>
                                    <td>
                                        <span>Amount</span>
                                    </td>
                                    <td>
                                        <span>Status</span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody className="user-table-body">
                                {[1, 2, 4, 5, 1, 2, 4, 5, 1, 2, 4, 5,1, 2, 4, 5,].map((item: any, index: number) => {
                                    return (
                                        <tr className="py-3">
                                            <td >{index}</td>
                                            <td className="w-[20px]">19 July 20228:00AM</td>
                                            <td>BVN</td>
                                            <td>Bank</td>
                                            <td>
                                                <CurrencyFormat
                                                    value={20000}
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
                                                   Successful
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>

        </>
    )
}

export default ReportTable
