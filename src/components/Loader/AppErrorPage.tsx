import React from "react";

interface Props {
  onRefetch: () => void;
  errorText?:string
}
const AppErrorPage: React.FC<Props> = ({ onRefetch, errorText }) => {
  return (
    <div className="bg-white relative overflow-hidden flex-col flex items-center justify-center h-[90vh]">
      <p className="e-question">?</p>
      <p className="e-question">?</p>
      <p className="e-question">?</p>
      <div className="flex items-center absolute justify-center flex-col">
        <h1>OOPS! something went wrong</h1>

        <button className="error-btn-refetch" onClick={() => onRefetch()}>{errorText}</button>
      </div>
    </div>
  )
}

export default AppErrorPage
