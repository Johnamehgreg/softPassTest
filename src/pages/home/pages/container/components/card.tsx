import React from "react"

interface Props {
    children: JSX.Element,
}
const CardContainer:React.FC<Props> = ({children}) => {


    return (
            <div className="container-page-card px-4">
               {children}
            </div>
            
    )
}


export default CardContainer
