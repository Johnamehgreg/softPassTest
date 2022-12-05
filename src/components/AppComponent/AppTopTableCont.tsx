import { useContext, useState } from 'react';
import { ReactComponent as ArrowDown } from "../../assets/image/svg/ArrowDown.svg";
import { AppProvider } from '../../contextProvide/AppContext';
import AppDatePicker from "./AppDatePicker";
import AppDropDownT from "./AppDropdownT";



interface Props {
    setstatus:React.Dispatch<any>
}

const AppTopTableCont:React.FC<Props> = ({setstatus}) => {
    const [isShowDate, setisShowDate] = useState(false)

    const { userDetail, topNavData } = useContext(AppProvider)


    return (
        <div className="flex flex-wrap items-center px-3 py-3 bg-gray-100/40">
            <div className="md:w-6/12 sm:w-9/12 flex items-center ">
                <span className="text-sm text-gray-400">Reference</span>
                {/* <AppDropDownT placeholder="Temitayo Abimbola" /> */}
                <b className="table-filter-item capitalize pointer">
                {userDetail?.first_name} {userDetail?.last_name}{" "}
                   
                </b>
                <AppDatePicker setisOpen={(value) => setisShowDate(value)} isOpen={isShowDate} />
                <span
                    onClick={() => setisShowDate(!isShowDate)}
                    className="table-filter-item pointer">
                    Date{" "}
                    <i className="pt-[3px]">
                        <ArrowDown color={"black"} width={"17"} />
                    </i>

                </span>
                <AppDropDownT setState={setstatus}  placeholder="Status" />


            </div>
            <div className="md:w-6/12 sm:w-3/12 text-end">
                <span className="text-[12px] text-softpasspurple-500">
                    Clear filter
                </span>
            </div>
        </div>

    )
}

export default AppTopTableCont
