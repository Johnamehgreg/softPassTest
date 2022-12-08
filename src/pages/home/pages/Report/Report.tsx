import { useState } from 'react'
import AppWrapper from '../../../../components/AppWrapper'
import ReportTable from './components/ReportTable'
import TopCard from './components/TopCard'

const Report = () => {

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
                    <h1 className="w-6/12 text-[20px] font-semibold">API Call History</h1>
                   
                </div>

                <div className="px-4 md:px-4 lg:px-10 mt-3 pb-6">
                    <TopCard />

                    <ReportTable />
                </div>

                

            </section>

        </AppWrapper>
    )
}

export default Report
