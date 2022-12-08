import { useState } from "react"
import AppRetching from "../../../../components/AppComponent/AppRetching"
import AppWrapper from "../../../../components/AppWrapper"
import AuditItem from "./components/AuditItem"
import TopCard from "./components/TopCard"

const Auditlog = () => {
    const [errorText, seterrorText] = useState('Retry')
    const [isError, setisError] = useState(false)


    const onRefetch = () => {
        seterrorText('Retrying...')
    }



    return (
        <AppWrapper
            errorText={errorText}
            onRefetch={() => onRefetch()}
            isSuccess={true}
            isError={isError}
        >

            <section className="bg-white mt-8 garrif">
                <div className="flex items-center px-3 md:px-5 py-4 bg-softpassgray-50 lg:bg-transparent border-b-[1px] border-b-gray-300">
                    <h1 className="w-6/12 text-[20px] font-semibold">Audit log</h1>
                    <div className="w-6/12 flex justify-end">
                        <button
                            // onClick={() => setIsCreateContOpen(true)}
                            className="text-softpasspurple-300 border-[8px] py-1 px-2 border-gray-100 text-[10px] md:text-[15px]  " >
                           Generate Report
                        </button>

                    </div>
                </div>


                <div className="px-4 md:px-4 lg:px-10 mt-3 pb-6">

                    <TopCard />

                    <AppRetching isFetching={false} />





                    {
                        [1, 2, 3, 3,]
                            .map((item: any, index: any) => {
                                return (
                                    <AuditItem />
                                )
                            })
                    }


                </div>


            </section>


        </AppWrapper>
    )
}

export default Auditlog
