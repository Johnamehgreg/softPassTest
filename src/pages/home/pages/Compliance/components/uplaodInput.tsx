import React from "react";

interface Props {
    onFileSelect: (e: any, type: string) => void;
    placeholder?: string;
    type: string;
    fileName?: string | null;
    isUpload?: boolean;

}


const UploadInout: React.FC<Props> = (props) => {
    const { onFileSelect, placeholder, type, isUpload, fileName } = props

    console.log(isUpload, 'uplaod data')



    return (
        <div className="w-full my-4">
            <div
                className={`border-gray-400 px-3 ${isUpload ? 'min-h-[40px]' : ''} justify-between verification-upload-contain  `}
            >
                <p className="text-[14px]"> {placeholder}</p>

                {
                    !isUpload && (
                        <label

                            className='no-edit-input rounded-[50px] px-4 py-1 border-[1px] border-gray-400  pointer'
                            htmlFor={type}
                        >

                            <p className="text-[13px]">Upload</p>

                            <input
                                onChange={(e: any) => onFileSelect(e.target.files[0], type)}
                                // disabled={edit}
                                className="hidden"
                                type="file"
                                id={type}
                                accept="image/png, image/jpg,  image/jpeg"
                            />
                        </label>
                    )
                }





            </div>

            {
                fileName && (
                    <p className="text-[12px] mt-1 text-gray-500">File name: {fileName} </p>
                )
            }


        </div>
    )
}

export default UploadInout