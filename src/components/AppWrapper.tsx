import React from "react"
import AppErrorPage from "./Loader/AppErrorPage"
import AppPageLoader from "./Loader/AppPageLoader"


interface Props {
    children?: JSX.Element,
    isLoading?: boolean,
    isPageLoading?: boolean,
    isError?: boolean,
    isSuccess?: boolean,
    onRefetch: () => void,
    errorText?: string,

}
const AppWrapper: React.FC<Props> = ({ children, errorText, isSuccess, onRefetch, isError }) => {
    return (
        <>
            {
                isSuccess ?
                    <>
                        {children}
                    </>
                    :
                    <>
                        {
                            isError ?
                                <AppErrorPage
                                    errorText={errorText}
                                    onRefetch={() => onRefetch()} />
                                :
                                <AppPageLoader />
                        }
                    </>
            }
        </>
    )
}

export default AppWrapper