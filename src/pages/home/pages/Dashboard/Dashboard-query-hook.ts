import { useQuery } from "react-query"
import apis from "../../../../services/apiSevices"

interface ARG {
    onError: () => void,
    servicesId:any,
    startDate: any,
    endDate: any,

    
}

export const useDashboardEvent = (arg: ARG) => {
    const { onError, servicesId, startDate, endDate } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-all-dashboard', servicesId, startDate, endDate ],
        () => apis.dashboard.getDashboardSummary({servicesId, startDate,  endDate}),
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
