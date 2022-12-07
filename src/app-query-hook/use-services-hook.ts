import { useQuery } from "react-query"
import apis from "../services/apiSevices"


export const useGetServices = () => {

    const { data: all, isFetched, isSuccess, isFetching } = useQuery(
        ['get-all-services'],
        () => apis.services.getAllServices(),
        {

        }
    )

    let data = all?.data

    console.log('@services List', data)

    return {
        data,
        isFetched,
        isSuccess,

    }

}