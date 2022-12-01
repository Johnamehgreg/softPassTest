import { useQuery } from "react-query"
import apis from "../services/apiSevices"


export const useUserDetails = () => {

    const { data: all, isFetched, isSuccess, isFetching } = useQuery(
        ['get-user-detail'],
        () => apis.user.getUserDetails(),
        {

        }
    )

    let data = all?.data

    return {
        data,
        isFetched,
        isSuccess

    }

}