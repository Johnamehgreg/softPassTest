import { useQuery } from "react-query"
import apis from "../../../../services/apiSevices"

interface ARG {
    onError: () => void,
    
}

export const useDashboardEvent = (arg: ARG) => {
    const { onError,  } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-all-dashboard', ],
        () => apis.dashboard.getDashboardSummary(),
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
