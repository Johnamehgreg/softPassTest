import React from "react";


interface Props {
    placeholder?: string,
    onChange?: (e:any) => void;
    value?:string
}
const HomeFileUpload:React.FC<Props> = ({placeholder, onChange, value}) => {
    return (
        <div className=" flex items-center py-1 border-gray-200 rounded-md border-[1px] justify-between my-4">
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