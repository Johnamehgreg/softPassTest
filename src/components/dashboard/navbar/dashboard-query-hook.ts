import { useQuery } from "react-query"
import apis from "../../../services/apiSevices"

interface ARG {
    onError: () => void,
}


export const useSideCategoryHook = (arg: ARG) => {
    const { onError,  } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-all-side-category',],
        () => apis.SideNav.getSideNavCategories(),
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


interface ARGServices {
    onError: () => void,
    id:string
}
export const useGetServiceByCategory = (arg: ARGServices) => {
    const { onError, id } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-services-by-category', id],
        () => apis.SideNav.getServicesByCategory(id),
        {
            onError: () => {
                onError()
            }
        }



    )

    let data = all?.data

    console.log(all, 'g tech')

    return {
        refetch,
        data,
        isFetched,
        isError,
        isSuccess,
        isFetching

    }
}

export const useGetSuccessCall = () => {
    

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-success-dashboard-calls',],
        () => apis.dashboard.getSuccessCalls(),
       



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

export const useGetFailsedCall = () => {
    

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-failed-dashboard-calls',],
        () => apis.dashboard.getFailedCalls(),
       



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