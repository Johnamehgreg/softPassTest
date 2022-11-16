import React from "react";
import { BounceLoader } from "react-spinners";

interface Props {
  isLoading: boolean
}
const AppLoader: React.FC<Props> = ({ isLoading }) => {


  return (
    <>
      {
        isLoading && (
          <div className="appLoader-container">
            <div className="loader-inner">
              {/* <img src={Loader} /> */}
              <BounceLoader size={50} color="#E1217A" />
            </div>
          </div>
        )
      }
    </>
  )
}

export default AppLoader
