import { useContext } from "react"
import { useQuery } from "react-query"
import { popType, showPopUp } from "../../../../../constanst/popupFunc"
import { AppProvider } from "../../../../../contextProvide/AppContext"
import apis from "../../../../../services/apiSevices"

interface ARG {
    onError: () => void,
    status?:boolean
}

export const useContainerHook = (arg: ARG) => {
    const { onError, status } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-all-container', status],
        () => apis.container.getAllContainer(status),
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




export const useCreateContainer = (closeModal: Function) => {

    const onError = () => {

    }


    const { setisLoading } = useContext(AppProvider)

    const submit = (data: any, refetch:Function) => {

        setisLoading(true)

        apis.container.createContainer(data)
            .then((res: any) => {
                closeModal()
                refetch()
                showPopUp({ type: popType.success, message: 'Container created successfully' })
            })
            .catch((err: any) => {

                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }

            }).finally(() => {
                setisLoading(false)
            })
    }


    const disActiveContainers = (type: {isActive:boolean, containerId: string, refetch:Function }) => {

        const { containerId, isActive, refetch } = type


        setisLoading(true)
        let url = isActive ? `/container/deactivate?containerId=${containerId}` : `/container/activate?containerId=${containerId}`



        apis.container.disactiveContainer( url )
            .then((res: any) => {
                closeModal()
                refetch()
                showPopUp({ type: popType.success, message: 'Container desactivated successfully' })
            })
            .catch((err: any) => {

                const { data } = err.response


                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }

            }).finally(() => {
                setisLoading(false)
            })
    }
    const editContainer = (type: { data: any,  containerId: string, refetch:Function }) => {

        const { data, containerId, refetch } = type
        setisLoading(true)

        apis.container.editContainer({data, id:containerId})
            .then((res: any) => {
                closeModal()
                refetch()
                showPopUp({ type: popType.success, message: 'Container created successfully' })
            })
            .catch((err: any) => {

                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }

            }).finally(() => {
                setisLoading(false)
            })
    }

    return {
        submit,
        disActiveContainers,
        editContainer,
    }
}

export const useEditContainer = (closeModal: Function) => {

    const onError = () => {

    }

    const { refetch } = useContainerHook({ onError })

    const { setisLoading } = useContext(AppProvider)

    const submit = (data: any) => {

        setisLoading(true)

        apis.container.createContainer(data)
            .then((res: any) => {
                closeModal()
                refetch()
                showPopUp({ type: popType.success, message: 'Container created successfully' })
            })
            .catch((err: any) => {

                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }

            }).finally(() => {
                setisLoading(false)
            })
    }

    return {
        submit
    }
}

interface ARG1 {
    onError: () => void,
    containerId: string
}


export const useGetServiceByContainer = (arg: ARG1) => {
    const { onError, containerId } = arg

    const { data: all, isFetching, refetch, isFetched, isError, isSuccess } = useQuery(
        ['get-service-by-container', containerId],
        () => apis.services.getServiceByContainer(containerId),
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


export const useServicesEvent = (type:{closeModal:Function, refetch:Function}) => {
    const { setisLoading } = useContext(AppProvider)

    const {closeModal, refetch } = type

    const deleteService = (type:{servicesId:string, containerId:string }) => {
        const { servicesId, containerId} = type
        setisLoading(true)

        apis.services.deleteContainerSrvice({servicesId, containerId})
            .then((res: any) => {
                closeModal()
                refetch()
                showPopUp({ type: popType.success, message: 'Container deleted successfully' })
            })
            .catch((err: any) => {

                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }

            }).finally(() => {
                setisLoading(false)
            })
    }
    const addService = (data:any) => {
        setisLoading(true)

        apis.services.addContainerService(data)
            .then((res: any) => {
                closeModal()
                refetch()
                showPopUp({ type: popType.success, message: 'Services added successfully' })
            })
            .catch((err: any) => {

                const { data } = err.response

                if (data?.message) {
                    showPopUp({ type: popType.error, message: data?.message })
                } else {
                    showPopUp({ type: popType.error, message: 'Something went wrong' })
                }

            }).finally(() => {
                setisLoading(false)
            })
    }




    return {
        deleteService,
        addService
    }
}





