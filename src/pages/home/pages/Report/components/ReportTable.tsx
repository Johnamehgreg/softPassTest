import dateFormat from "dateformat"
import CurrencyFormat from "react-currency-format"

interface Props {
    list: any
}

const ReportTable: React.FC<Props> = (props: any) => {
    const { list } = props

    console.log(list, '@all list item')
    return (
        <>

            <section className="m">
                <div className="w-[100%] overflow-scroll">
                    <div className="pt-3 w-auto">
                        <table width="100%" className="user-table ">
                            <thead className="user-table-head">
                                <tr className="click-container bg-gray-100/40 px-8">
                                    <td>
                                    <div className="table-item">
                                    <span>S/N</span>
                                    </div>
                                       
                                    </td>
                                    <td className=" px-8">

                                        <div className="table-item">
                                            <span>Date/Time</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className="table-item">
                                            <span>API Call</span>
                                        </div>

                                    </td>
                                    <td>
                                        <div className="table-item">
                                            <span>Transaction Type</span>
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
                                </tr>
                            </thead>
                            <tbody className="user-table-body">
                                {list?.map((item: any, index: number) => {
                                    return (
                                        <tr className="py-3">
                                            <td >
                                            <div className="table-item">
                                                <p>{index + 1}</p>
                                            </div>
                                            </td>
                                            <td >
                                                <div className="table-item">
                                                    <p className="text-center">
                                                        {dateFormat(item?.createdAt, "dd mmmm yyyy")}
                                                        <br />
                                                        {dateFormat(item?.createdAt, "h:MM TT")}
                                                    </p>
                                                </div>


                                            </td>
                                            <td>
                                                <div className="table-item">
                                                    <p>BVN</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="table-item">
                                                    <p> {item?.transaction_type}</p>
                                                </div>

                                            </td>
                                            <td>
                                                <div className="table-item">
                                                    <CurrencyFormat
                                                        value={item?.price}
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
                                                </div>

                                            </td>

                                            <td >
                                                <div className="table-item">
                                                    <button
                                                        className={`px-3 py-1 ${item?.status === 'Successful' ? "primary" : "danger"}`}
                                                    >
                                                        {item?.status}
                                                    </button>
                                                </div>

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
