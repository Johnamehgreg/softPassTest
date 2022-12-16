import { useState } from "react";

interface Props {
    onChange: (e:any) => void;
    placeholder?: string;
}


const UploadInout:React.FC<Props> = (props) => {
    const {onChange, placeholder} = props

    const [fileName, setfileName] = useState(null)

    const onchangeImgFunc = (e: any) => {
        let fr: any = new FileReader();
        if (e.target.files.length > 0) {
            let fileData = e.target.files[0]
            fr.readAsArrayBuffer(fileData);
            const blob = new Blob([fr.result]);
            const url = URL.createObjectURL(blob,)
            setfileName(fileData?.name)
            console.log(e.target.files[0], 'html data')
            onChange(e)

        }
    };
    return (
        <div className="w-full my-4">
            <div
                className={`border-gray-400 px-3 justify-between verification-upload-contain  `}
            >
                <p className="text-[14px]"> {placeholder}</p>

                <label

                    className='no-edit-input rounded-[50px] px-4 py-1 border-[1px] border-gray-400  pointer'
                    htmlFor="profile-input-file"
                >

                    <p className="text-[13px]">Upload</p>

                    <input
                        onChange={onchangeImgFunc}
                        // disabled={edit}
                        className="hidden"
                        type="file"
                        id="profile-input-file"
                        accept="image/png, image/jpg,  image/jpeg"
                    />
                </label>

            </div>

            {
                fileName !== null && (
                    <p className="text-[12px] mt-1 text-gray-500">File name: {fileName} </p>
                )
            }
        </div>
    )
}

export default UploadInout