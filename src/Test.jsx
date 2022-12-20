import axios from "axios";
import { useState } from "react";


const Test = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("cloud_name", "softpass");
    data.append("upload_preset", "soieburj")
    data.append("api_secret", "1SmKMTGGZ6auOJmdq3P6CcEUtdk");
    data.append("api_key", "532628562871137");

    let url = "https://api.cloudinary.com/v1_1/${cloudName}/upload"

    axios.post(url, data)
    .then((res) => {
        console.log(res, 'cloundary response')
    })
    .catch((err) => {
        console.log(err.response, 'cloundary response')
    })
    
  }
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt='' />
      </div>
    </div>
  );
};
export default Test;
