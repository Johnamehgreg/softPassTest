import React from 'react'

interface Props {
    info: Object
}

 const ApiCallHistory:React.FC<Props> = (props: Props)=> {
    const {info} = props

    return (
        <div className="py-12 md:px-8 px-4 flex justify-between">
        <div className="flex bg-white flex-wrap px-3 py-3 shadow-xl sm:w-52 w-40">
          <b className="text-[12px] font-normal sm:text-sm block w-full pb-4">
            Successfull Calls
          </b>
          <span className="flex justify-center w-full items-center">
            <b className="text-lg all-flex font-normal">25</b>
            <abbr className="text-[9px] text-softpassgreen-300 bg-softpassgreen-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
              +25%
            </abbr>
          </span>
        </div>
        <div className="flex bg-white flex-wrap px-3 py-3 shadow-xl sm:w-52 w-40">
          <b className="text-[12px] sm:text-sm block w-full pb-4 font-normal">
            Failed calls
          </b>
          <span className="flex justify-center w-full items-center">
            <b className="text-lg all-flex font-normal">10</b>
            <abbr className="text-[9px] text-softpasspurple-300 bg-softpasspurple-300/10 h-[20px] w-[45px] font-semibold rounded-lg grid place-items-center">
              +25%
            </abbr>
          </span>
        </div>
      </div>
    )
}

export default ApiCallHistory
