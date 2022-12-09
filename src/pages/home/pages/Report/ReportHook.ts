import { useQuery } from "react-query"
import apis from "../../../../services/apiSevices"

interface ARG1 {
    onError: () => void,
   
}

export const useGetAllReport = (arg: ARG1) => {
    const { onError,  } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-all-report', ],
        () => apis.report.getAllReport(),
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