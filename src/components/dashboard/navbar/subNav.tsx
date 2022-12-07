import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useGetServiceByCategory } from "./dashboard-query-hook"

interface Props {
    id: string
}
const SubNav: React.FC<Props> = ({ id }) => {
    const navigation  = useNavigate()
    const ref = useRef(null);
    const element = ref.current;

    const [services, setservices] = useState<any>([])

    const onError = () => {

    }

    const { data, refetch, isFetched, isSuccess } = useGetServiceByCategory({ onError, id })


    const checkSuccess = () => {

        if (isFetched && isSuccess) {
          
          setservices(data.data)
        }
      }
    
    
      useEffect(() => {
        checkSuccess()
      }, [data])
    
    

    
    return (
        <div className="sub-route-item-popup">
            {
                services?.map((item:any) => {
                    return (
                        <div
                        ref={ref}
                        onClick={
                            () => {
                                navigation(`/verification-services/${item?.service_name}`)
                                
                            }
                        }
                        className="sub-item-child pointer rounded">
                            <p>{item.service_name}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default SubNav
