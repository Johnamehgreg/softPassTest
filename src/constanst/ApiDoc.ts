export const javaScript = `
var myHeaders = new Headers();
myHeaders.append("client_id", "YOUR_CLIENT_ID_HERE");
myHeaders.append("container_key", "YOUR_CONTAINER_KEY_HERE");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "bvn_number": "12345678909"
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

  export const Python = `
  import requests
  import json
  
  url = "https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn"
  
  payload = json.dumps({
    "bvn_number": "12345678909"
  })
  headers = {
    'client_id': 'YOUR_CLIENT_ID_HERE',
    'container_key': 'YOUR_CONTAINER_KEY_HERE',
    'Content-Type': 'application/json'
  }
  
  response = requests.request("POST", url, headers=headers, data=payload)
  
  print(response.text)`

  export const php = `
  <?php
  require_once 'HTTP/Request2.php';
  $request = new HTTP_Request2();
  $request->setUrl('https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn');
  $request->setMethod(HTTP_Request2::METHOD_POST);
  $request->setConfig(array(
    'follow_redirects' => TRUE
  ));
  $request->setHeader(array(
    'client_id' => 'YOUR_CLIENT_ID_HERE',
    'container_key' => 'YOUR_CONTAINER_KEY_HERE',
    'Content-Type' => 'application/json'
  ));
  $request->setBody('{\n    "bvn_number":"12345678909"\n}');
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

   export const nodeJs =`
  const axios = require('axios');
  const data = JSON.stringify({
    "bvn_number": "12345678909"
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

  export const curl = `
  curl --location --request POST 'https://identity-verification.softpass.net/api/v1/verification/bvn/basic-bvn' 
  --header 'client_id: YOUR_CLIENT_ID_HERE' 
  --header 'container_key: YOUR_CONTAINER_KEY_HERE' 
  --header 'Content-Type: application/json' 
  --data-raw '{
      "bvn_number":"54651333604"
  }'`