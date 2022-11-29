import React from "react";


interface Props {
    placeholder?: string,
    onChange?: (e:any) => void;
    value?:string
}
const HomeFileUpload:React.FC<Props> = ({placeholder, onChange, value}) => {
    return (
        <div className="verification-input-contain my-4">
            {/* <input
                required
                type="text"
                placeholder={placeholder}
            /> */}

            <div className="w-full flex items-center px-2">
                <p className="text-[14px]">{placeholder}</p>
            </div>

            <button className="upload-btn">Upload</button>
        </div>
    )
}

export default HomeFileUpload