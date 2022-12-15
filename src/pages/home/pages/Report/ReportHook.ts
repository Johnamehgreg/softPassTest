import { useQuery } from "react-query"
import apis from "../../../../services/apiSevices"

interface ARG1 {
    onError: () => void,
    skip:number,
    status:any,
    dateRange:any
   
}

export const useGetAllReport = (arg: ARG1) => {
    const { onError,  skip, status, dateRange  } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-all-report', skip, dateRange.startDate, dateRange.endDate, status],
        () => apis.report.getAllReport({skip, status, dateRange}),
        {
            onError: () => {
                onError()
            }
        }



    )


    let data = all?.data



    return {
        refetch,
        data,
        isFetched,
        isError,
        isSuccess,
        isFetching

    }
}