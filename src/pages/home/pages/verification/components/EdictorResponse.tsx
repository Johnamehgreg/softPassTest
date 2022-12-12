import { javascript } from '@codemirror/lang-javascript';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';
import { createTheme } from '@uiw/codemirror-themes';
import CodeMirror from '@uiw/react-codemirror';
import React, { useEffect, useState } from 'react';

// import { curl, javaScript, nodeJs, php, Python } from '../constanst/ApiDoc';

const myTheme = createTheme({
    theme: 'light',
    settings: {
        background: '#160A4B',
        foreground: '#75baff',
        caret: '#5d00ff',
        selection: '#036dd626',
        selectionMatch: '#036d626',
        lineHighlight: '#160A4B',
        gutterBackground: '#160A4B',
        gutterForeground: '#8a919966',
    },
    styles: [
        { tag: t.comment, color: '#787b8099' },
        { tag: t.variableName, color: 'cyan' },
        { tag: [t.string, t.special(t.brace)], color: 'green' },
        { tag: t.number, color: '#5c6166' },
        { tag: t.bool, color: '#5c6166' },
        { tag: t.null, color: '#5c6166' },
        { tag: t.keyword, color: '#5c6166' },
        { tag: t.operator, color: '#5c6166' },
        { tag: t.className, color: '#5c6166' },
        { tag: t.definition(t.typeName), color: '#5c6166' },
        { tag: t.typeName, color: '#5c6166' },
        { tag: t.angleBracket, color: '#5c6166' },
        { tag: t.tagName, color: '#5c6166' },
        { tag: t.attributeName, color: '#5c6166' },
    ],
});

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
    


 const javaScript = `
 var myHeaders = new Headers();
 myHeaders.append("client_id", "YOUR_CLIENT_ID_HERE");
 myHeaders.append("container_key", "YOUR_CONTAINER_KEY_HERE");
 myHeaders.append("Content-Type", "application/json");
 
 var raw = JSON.stringify({
   "bvn_number": "${bvn_number}"
 });
 
 var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
 };
 
 fetch("https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));`
 
    const Python = `
   import requests
   import json
   
   url = "https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn"
   
   payload = json.dumps({
     "bvn_number": "${bvn_number}"
   })
   headers = {
     'client_id': 'YOUR_CLIENT_ID_HERE',
     'container_key': 'YOUR_CONTAINER_KEY_HERE',
     'Content-Type': 'application/json'
   }
   
   response = requests.request("POST", url, headers=headers, data=payload)
   
   print(response.text)`
 
    const php = `
   <?php
   require_once 'HTTP/Request2.php';
   $request = new HTTP_Request2();
   $request->setUrl('https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn');
   $request->setMethod(HTTP_Request2::METHOD_POST);
   $request->setConfig(array(
     'follow_redirects' => TRUE
   ));
   $request->setHeader(array(
     'client_id' =>  ${client_id},
     'container_key' => 'YOUR_CONTAINER_KEY_HERE',
     'Content-Type' => 'application/json'
   ));
   $request->setBody('{\n    "bvn_number":"${bvn_number}"\n}');
   try {
     $response = $request->send();
     if ($response->getStatus() == 200) {
       echo $response->getBody();
     }
     else {
       echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
       $response->getReasonPhrase();
     }
   }
   catch(HTTP_Request2_Exception $e) {
     echo 'Error: ' . $e->getMessage();
   }`
 
     const nodeJs =`
   const axios = require('axios');
   const data = JSON.stringify({
     "bvn_number": "${bvnNumber}"
   });
   
   var config = {
     method: 'post',
     url: 'https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn',
     headers: { 
       'client_id': 'YOUR_CLIENT_ID_HERE', 
       'container_key': 'YOUR_CONTAINER_KEY_HERE', 
       'Content-Type': 'application/json'
     },
     data : data
   };
   
   axios(config)
   .then(function (response) {
     console.log(JSON.stringify(response.data));
   })
   .catch(function (error) {
     console.log(error);
   });`
 
    const curl = `
   curl --location --request POST 'https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn' 
   --header 'client_id: YOUR_CLIENT_ID_HERE' 
   --header 'container_key: YOUR_CONTAINER_KEY_HERE' 
   --header 'Content-Type: application/json' 
   --data-raw '{
       "bvn_number":"${bvnNumber}"
   }'`
    const [code, setcode] = useState<string>(nodeJs)

    const [tab, settab] = useState('nodejs')

    // useEffect(() => {
    //  setcode()
    // }, [])
    


    const handleTab = (value: string) => {
        settab(value)
        if (value === 'nodejs') {
            setcode(nodeJs)
        }
        else if (value === 'python') {
            setcode(Python)
        } else if (value === 'php') {
            setcode(php)
        }else if(value === 'js'){
            setcode(javaScript)
        }else if(value === 'curl'){
            setcode(curl)
        }

        console.log(code)
    }







    return (
        <div className='set-edictor-home p-3'>
            <div className='edict-content  px-4 pt-4'>
               
                <div className='edictor-wrapper'>

                    <CodeMirror
                        value={responseCode}
                        theme={myTheme}
                        editable={false}
                        extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
                        onChange={(value, viewUpdate) => {
                            console.log('value:', value);
                        }}
                    />

                </div>
            </div>
        </div>

    );
}
export default VericationEdictorResponse;


