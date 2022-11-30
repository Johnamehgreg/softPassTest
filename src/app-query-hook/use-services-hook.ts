import { useState } from "react"
import { useQuery } from "react-query"
import apis from "../services/apiSevices"


export const useGetServices = () => {
    const [serviceList, setserviceList] = useState<any>([])

    const { data: all, isFetched, isSuccess, isFetching } = useQuery(
        ['get-all-services'],
        () => apis.services.getAllServices(),
        {

        }
    )

    let data = all?.data

    return {
        data,
        isFetched,
        isSuccess,
        serviceList

    }

}