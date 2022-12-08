import React from "react"

interface Props {
    children: JSX.Element,
}
const CardAuditLog:React.FC<Props> = ({children}) => {


    return (
            <div className="container-page-card px-4 py-4 my-5">
               { children }
            </div>
            
    )
}


export default CardAuditLog
