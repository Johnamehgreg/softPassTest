import React from "react";
import { ScaleLoader } from "react-spinners";
interface Props {
    isFetching: boolean;
}
const AppRetching: React.FC<Props> = ({ isFetching }) => {
    return (
        <>
            {
                isFetching && (
                    <div className="w-full relative ">
                        <div className="inner-refetch-card">
                            <ScaleLoader color="#E1217A" />
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default AppRetching