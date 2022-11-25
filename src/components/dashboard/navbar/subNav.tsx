import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    item: any
}
const SubNav: React.FC<Props> = ({ item }) => {
    const navigation  = useNavigate()
    const ref = useRef(null);
    const element = ref.current;
    

    
    return (
        <div className="sub-route-item-popup">
            {
                item?.map((item:any) => {
                    return (
                        <div
                        ref={ref}
                        onClick={
                            () => {
                                navigation(item.route)
                                
                            }
                        }
                        className="sub-item-child pointer rounded">
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default SubNav
