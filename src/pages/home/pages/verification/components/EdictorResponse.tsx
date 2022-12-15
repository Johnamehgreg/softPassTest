import React, { useEffect, useState } from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

// import { curl, javaScript, nodeJs, php, Python } from '../constanst/ApiDoc';



interface Props {
    containerKey?:string,
    clientId?:string,
    bvnNumber?:string,

    responseCode?: any
}



const VericationEdictorResponse:React.FC<Props> = (props:any) => {
    const {bvnNumber, responseCode, containerKey, clientId} = props

    const [client_id, setclient_id] = useState(clientId)
    const [bvn_number, setbvn_number] = useState(bvnNumber)
    const [container_key, setcontainer_key] = useState(containerKey)


    useEffect(() => {
      setclient_id(clientId)
      setbvn_number(bvnNumber)
      setcontainer_key(containerKey)
     
    })
    











    return (
        <div className='set-edictor-home p-3'>
            <div className='edict-content overflow-scroll  px-4 pt-4'>
               
                  <JSONPretty 
                  id="json-pretty" 
                  mainStyle="padding:1rem; font-size:0.8em; color:#A6CA7E;  height: 100%;  background:#160A4B;" 
                  
                   data={responseCode}></JSONPretty>
                   

            </div>
        </div>

    );
}
export default VericationEdictorResponse;


