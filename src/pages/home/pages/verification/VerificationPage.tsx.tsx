import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetServices } from "../../../../app-query-hook/use-services-hook";
import AppSelect from "../../../../components/AppComponent/AppSelect";
import SelectIdDropdown from "../../../../components/dashboard/widget/SelectIdDropdown";
import HomeInput from "../../../../components/input/homeInput";
import { AppProvider } from "../../../../contextProvide/AppContext";
import { useContainerHook } from "../container/modals/container-query-hook";
import VericationEdictor from "./components/Edictor";
import VericationEdictorResponse from "./components/EdictorResponse";
import { useVerificationHook } from "./VerificationHook";


interface Props { }

const VerificationPage: React.FC = (props: Props) => {
    const { } = props;

    //VARIABLES
    const [clientId, setclientId] = useState('')
    const [containerKey, setcontainerKey] = useState('')
    const [bvnNumber, setbvnNumber] = useState('')
    const [tinNumber, settinNumber] = useState('')
    const [requestCode, setrequestCode] = useState<any>(null)
    const [bvnPhone, setbvnPhone] = useState('')

    const [mode, setmode] = useState({
        type: 'BVN',
        value:''
    })


    const [ItemServices, setItemServices] = useState<any>({})
    const [containerList, setcontainerList] = useState<any>([])
    const [headersData, setheadersData] = useState<any>(null)

    const navigation = useNavigate()

    let modeList = [
        { label: 'BVN', value: 'BVN' },
        { label: 'Phone number', value: 'PHONE' },
    ]

    //FUNCTION
    let { service } = useParams();

    const onError = () => {


    }

    const {
        data: containerData,
        isFetched: containerIsFetched,
        isError: isErrorData,
        isSuccess: isDataSuccess,
        isFetching,
        refetch
    } = useContainerHook({ onError, status: true })


    const { data, isFetched, isSuccess, } = useGetServices()
    const { userDetail, } = useContext(AppProvider)


    const checkSuccess = () => {
        if (containerIsFetched && isDataSuccess) {
            let CList = containerData?.data.map((i: any) => {
                return { ...i, label: i?.container_name, value: i?.container_key }
            })
            setcontainerList(CList)

        }
        if (isSuccess && isFetched) {
            let Ite = data?.data.filter((item: any) => item.service_name === service)

            if (Ite.length > 0) {
                setItemServices(Ite[0])
            } else {
                navigation(`/dashboard`)
            }


        }
    }

    console.log('loading', userDetail)




    //HOOK
    useEffect(() => {
        checkSuccess()
        // onChange(selectContent[0].title, selectContent);
    }, [data, containerData]);



    const onSelectContainer = (item: any) => {
        setclientId(item?.client_id)
        setcontainerKey(item?.container_key)

    }

    const onSelectMode = (e: any) => {
        setmode({...mode, type:e.label, value:e.value})
    }

    const getDataType = () => {
        switch (service) {
            case 'Basic bvn':
                return { "bvn": bvnNumber };

            case 'Tin Verification':
                return { "tinNumber": tinNumber };

            case 'Customer verification with phone number':
                return {
                    "bvnOrPhone": bvnPhone,
                    "mode": mode.value
                };

            default:
                return {}
        }
    }




    const { submit } = useVerificationHook({ type: service, header: { containerKey, clientId } })


    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let data = getDataType()



        submit(data, setrequestCode)

    }





    return (
        <>
            {/* start of select id */}
            <div className="max-w-[200px]">
                <SelectIdDropdown dropdownDirection="right" />
            </div>
            {/* end of select id */}


            <section className="bg-white mt-8 garrif rounded-md">
                <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
                    <h1 className="w-6/12 text-[22px] font-semibold">{service}</h1>
                    <div className="w-6/12">
                        <div className="flex justify-end z-10">
                            <b className="border-[12px] border-gray-100 px-3 text-[17px] py-1 text-softpasspurple-300">
                                <span>&#8358;</span>
                                {ItemServices?.service_price}/call
                            </b>
                        </div>
                    </div>
                </div>

                <div className="border-t-[1px] border-gray-500 px-2 flex justify-center w-full">
                    <div className="lg:w-11/12 w-full pt-5 flex flex-wrap justify-between">
                        <div className="w-full md:w-5/12 ">
                            <form
                                onSubmit={onSubmit}
                            >

                                {
                                    service === 'Basic bvn' ?

                                        <>
                                            <HomeInput
                                                value={bvnNumber}
                                                required={true}
                                                onBlur={() => console.log('fknf')}
                                                placeholder="BVN Number"
                                                onChange={(e) => setbvnNumber(e.target.value)}
                                            />
                                            <AppSelect
                                                placeholder="Select container"
                                                options={containerList}
                                                onChange={(e) => onSelectContainer(e)}
                                            />

                                        </>

                                        :

                                        service === 'Tin Verification' ?


                                            <>
                                                <HomeInput
                                                    value={tinNumber}
                                                    required={true}
                                                    onBlur={() => console.log('fknf')}
                                                    placeholder="TIN Number"
                                                    onChange={(e) => settinNumber(e.target.value)}
                                                />
                                                <AppSelect
                                                    placeholder="Select container"
                                                    options={containerList}
                                                    onChange={(e) => onSelectContainer(e)}
                                                />

                                            </>

                                            :
                                            service === 'Customer verification with phone number' ?


                                                <>
                                                    <AppSelect
                                                        placeholder="Select Mode"
                                                        options={modeList}
                                                        onChange={(e) => onSelectMode(e)}
                                                    />
                                                    <div className="mt-4"></div>
                                                    <HomeInput
                                                        value={bvnPhone}
                                                        required={true}
                                                        onBlur={() => console.log('fknf')}
                                                        placeholder={mode.type === 'BVN' ? "BVN" : "Phone number"}
                                                        onChange={(e) => setbvnPhone(e.target.value)}
                                                    />
                                                    <AppSelect
                                                        placeholder="Select container"
                                                        options={containerList}
                                                        onChange={(e) => onSelectContainer(e)}
                                                    />



                                                </>

                                                :

                                                <>
                                                    <HomeInput
                                                        required={true}
                                                        onBlur={() => console.log('fknf')}
                                                        placeholder="BVN Number"
                                                        onChange={(e) => settinNumber(e.target.value)}
                                                    />
                                                    <AppSelect
                                                        placeholder="Select container"
                                                        options={containerList}
                                                        onChange={(e) => onSelectContainer(e)}
                                                    />

                                                </>




                                }


                                <div className="w-full text-center py-3 garrif">
                                    <button className="next-button">Submit</button>
                                </div>

                            </form>
                        </div>
                        <div className="w-full md:w-7/12 flex flex-wrap md:pl-7 mb-5">
                            <div className="mt-4 w-full bg-gray-100 md:p-5 p-2 rounded-md overflow-auto">
                                <b className="mb-2 block">Request</b>
                                <VericationEdictor
                                    containerKey={containerKey}
                                    clientId={clientId}
                                    bvnNumber={bvnNumber}


                                />
                                {/* <HomeEdictor /> */}
                            </div>

                            {
                                requestCode !== null && (
                                    <div className="mt-4 w-full bg-gray-100 md:p-5 p-2 rounded-md overflow-auto">
                                        <b className="mb-2 block">Response</b>
                                        <VericationEdictorResponse
                                            responseCode={requestCode}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VerificationPage;
