import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import AppRetching from "../../../../components/AppComponent/AppRetching";
import AppWrapper from "../../../../components/AppWrapper";
import ApiCallHistory from "../../../../components/dashboard/widget/ApiCallHistory";
import ChartDashboard from "../../../../components/dashboard/widget/Chart";
import TopCardContainer from "../../../../components/dashboard/widget/TopCardContainer";
import { AppProvider } from "../../../../contextProvide/AppContext";
import SelectIdDropdown from "./components/SelectIdDropdown";
import TimeRange from "./components/timeRange";
import { useDashboardEvent } from "./Dashboard-query-hook";


const Dashboard = () => {
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
        {
            name: "Number of Total calls",
            title: "This month",
            amount: "23",
            type: "regular",
        },

    ]);



    const { settopNavData, userDetail } = useContext(AppProvider)

    function getGreetingTime(m: any) {
        var g = null; //return g

        if (!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

        var split_afternoon = 12 //24hr time to split the afternoon
        var split_evening = 17 //24hr time to split the evening
        var currentHour = parseFloat(m.format("HH"));

        if (currentHour >= split_afternoon && currentHour <= split_evening) {
            g = "afternoon";
        } else if (currentHour >= split_evening) {
            g = "evening";
        } else {
            g = "morning";
        }

        return g;
    }

    
    const [servicesId, setservicesId] = useState<any>(null)
    const [startDate, setstartDate] = useState<any>(null)
    const [endDate, setendDate] = useState<any>(null)
    const [apiTitle, setapiTitle] = useState('No API Selected')
    const [dashboardData, setdashboardData] = useState<any>([])
    const onError = () => {
        setisError(true)
        setisSuccess(false)
        seterrorText('Retry')

    }

    const [isSuccess, setisSuccess] = useState(false)
    const [isError, setisError] = useState(false)
    const [errorText, seterrorText] = useState('Retry')


    const onRefetch = () => {
        refetch()
        seterrorText('Retrying...')
    }


    useEffect(() => {
        settopNavData({
            title: `Good ${getGreetingTime(moment())} ${userDetail?.first_name ? userDetail?.first_name : ''}`,
            message: `Hi ${userDetail?.first_name ? userDetail?.first_name : ''} 👋,  here's what has been happening`
        })

    }, [userDetail])


    const {
        data,
        isFetched,
        isError: isErrorData,
        isSuccess: isDataSuccess,
        isFetching,
        refetch
    } = useDashboardEvent({ onError, servicesId, startDate, endDate })



    const checkSuccess = () => {

        if (isFetched && isDataSuccess) {
            setisError(false)
            setisSuccess(true)

            let apiData = data?.data?.sort(function(a:any, b:any){return a.day-b.day}).map((item:any) =>  {
                return {...item, day:`${item.day}`}
            })

          

            setdashboardData([ ...apiData, ])



            // console.log(apiData, 'daily usage')
            


        }
    }


    useEffect(() => {
        checkSuccess()
    }, [data])

    const json = {
        "name": "John Doe","age": 32,
        "email": "johndoe@example.com"
    };


    return (
        <AppWrapper
            errorText={errorText}
            onRefetch={() => onRefetch()}
            isSuccess={isSuccess}
            isError={isError}
        >
            <div>

                <TopCardContainer tabs={tabs} />

                {/* <pre>{JSON.stringify(json, null, 2)}</pre> */}


                <section className="bg-white rounded-[10px] mt-8 garrif">
                    <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 lg:bg-transparent">
                        <h1 className="w-6/12 text-[22px] font-semibold">Overview</h1>
                        <div className="w-6/12">
                            <div className="flex justify-end z-10">
                                <SelectIdDropdown
                                    onChange={(e: any) => {
                                        setapiTitle(e.service_name)
                                        setservicesId(e._id)
                                    }
                                    }
                                    dropdownDirection={'left'} />
                            </div>
                        </div>
                    </div>

                    <div className=" flex items-center border-t-[1px] border-gray-300 sm:px-5 px-2 py-4">
                        <div className="w-6/12 md:w-9/12">
                            <div className="flex items-center font-semibold full whitespace-nowrap">
                                <span className="text-sm mr-6 sm:text-lg">{apiTitle}</span>
                                <abbr className="text-sm flex items-center text-softpassgreen-300 relative top-[2px]">
                                    &nbsp;&nbsp;
                                    <AiFillCheckCircle fill="#05CD99" />
                                    <abbr className="pl-1 relative -top-[2px]"> On track</abbr>
                                </abbr>
                            </div>
                        </div>
                        <TimeRange
                            dropdownDirection={'left'}
                            onChange={(e) => {

                                setstartDate(e.start)
                                setendDate(e.end)

                            }}
                        />

                    </div>


                    <div className="pb-12 md:px-12">
                        <ApiCallHistory info={tabs} />

                        <AppRetching
                            isFetching={isFetching}
                        />

                        <div className="w-full overflow-x-scroll hide-scrollbar">

                            {
                                //@ts-ignore
                                <ChartDashboard
                                    data={dashboardData}
                                />
                            }
                        </div>
                    </div>
                </section>
            </div>
        </AppWrapper>

    )
}

export default Dashboard



let dash = [
    { day: "1",  },
    { day: "2",},
    { day: "3",},
    { day: "4",},
    { day: "5",},
    { day: "6",},
    { day: "7",},
    { day: "8",},
    { day: "9",},
    { day: "10",},
    { day: "11",},
    { day: "12",},
    { day: "13",},
    { day: "14",},
    { day: "15",},
    { day: "16",},
    { day: "17",},
    { day: "18",},
    { day: "19",},
    { day: "20",},
    { day: "21",},
    { day: "22",},
    { day: "23",},
    { day: "24",},
    { day: "25",},
    { day: "26",},
    { day: "27",},
    { day: "28",},
    { day: "29",},
    { day: "30",},
    { day: "31",},
]