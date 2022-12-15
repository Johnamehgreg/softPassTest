import { useEffect, useState } from 'react'
import AppPagination from '../../../../components/AppComponent/AppPagination'
import AppRetching from '../../../../components/AppComponent/AppRetching'
import AppWrapper from '../../../../components/AppWrapper'
import ReportTable from './components/ReportTable'
import TopCard from './components/TopCard'
import { useGetAllReport } from './ReportHook'

const Report = () => {

  const [errorText, seterrorText] = useState('Retry')
  const [isError, setisError] = useState(false)
  const [isSuccess, setisSuccess] = useState(false)
  const [reportList, setreportList] = useState<any>([])
  const [pagiData, setpagiData] = useState({})
  const [skip, setskip] = useState(1)
  const [status, setstatus] = useState<any>(null)
  const [dateRange, setdateRange] = useState<any>({
    startDate: null,
    endDate: null
  })



  const onError = () => {
    setisError(true)
    setisSuccess(false)
    seterrorText('Retry')

  }


  const {
    data,
    isFetched,
    isError: isErrorData,
    isSuccess: isDataSuccess,
    isFetching,
    refetch
  } = useGetAllReport({ onError, skip, status, dateRange })


  const checkSuccess = () => {

    if (isFetched && isDataSuccess) {
      setisError(false)
      setisSuccess(true)
      setreportList(data?.data?.results)
      setpagiData(data?.data)




      console.log(data?.data, '@report  data')
    }
  }


  useEffect(() => {
    checkSuccess()
  }, [data])



  const onRefetch = () => {
    refetch()
    seterrorText('Retrying...')
  }




  return (
    <AppWrapper
      errorText={errorText}
      onRefetch={() => onRefetch()}
      isSuccess={isSuccess}
      isError={isError}
    >
      <>


        <section className="bg-white mt-8 garrif">
          <div className="flex items-center px-3 md:px-5 py-4 bg-softpassgray-50 lg:bg-transparent border-b-[1px] border-b-gray-300">
            <h1 className="w-6/12 text-[20px] font-semibold">API Call History</h1>

          </div>

          <div className="px-4 md:px-4 lg:px-10 mt-3 pb-6">
            <TopCard
              setdateRange={setdateRange}
              setstatus={setstatus}
            />
            <AppRetching isFetching={isFetching} />
            {
              reportList.length > 0 && (
                <>





                  <ReportTable list={reportList} />

                </>

              )
            }


            {
              isFetched && isDataSuccess && reportList.length === 0 && (
                <div className="flex flex-col items-center h-[100px] justify-center">
                  <p className="text-center text-gray-400 text-sm">
                    You currently have no  call history
                  </p>
                </div>
              )
            }
          </div>



        </section>

        <AppPagination setskip={setskip} data={pagiData} />

      </>


    </AppWrapper>
  )
}

export default Report
