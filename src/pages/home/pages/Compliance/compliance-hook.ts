import axios from "axios"
import { useContext } from "react"
import { useQuery } from "react-query"
import { popType, showPopUp } from "../../../../constanst/popupFunc"
import { AppProvider } from "../../../../contextProvide/AppContext"
import apis from "../../../../services/apiSevices"


interface ARG {
    onError: () => void,
}

export const useComplianceEvent = (arg: ARG) => {
    const { onError, } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-complinces-data',],
        () => apis.compliance.getComplianceDetail(),
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


export const useHandleComplianceUpdate = (refetch: Function) => {

    const { setisLoading } = useContext(AppProvider)


    const update = (data: any) => {
        setisLoading(true)
        apis.compliance.updateComplincesDetail(data)
            .then((res: any) => {
                refetch()
                showPopUp({ type: popType.success, message: 'Compliance updated successfully' })
            })
            .catch((err: any) => {
                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }
            })
            .finally(() => {
                setisLoading(false)
            })
    }


    const uploadImage = (image: any) => {
        const data = new FormData();
        data.append("file", image);
        data.append("cloud_name", "softpass");
        data.append("upload_preset", "soieburj")
        data.append("api_secret", "1SmKMTGGZ6auOJmdq3P6CcEUtdk");
        data.append("api_key", "532628562871137");

        let url = "https://api.cloudinary.com/v1_1/${cloudName}/upload"

        axios.post(url, data)
            .then((res) => {
                return { status: 'success', response: res }
            })
            .catch((err) => {
                return { status: 'failure', response: err }
            })

    }

    return {
        update,
        uploadImage
    }
}

