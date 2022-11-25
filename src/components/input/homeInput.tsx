import React from "react";


interface Props {
    placeholder?: string,
    onChange?: (e:any) => void;
    value?:string
}
const HomeInput:React.FC<Props> = ({placeholder, onChange, value}) => {
    return (
        <div className="verification-input-contain my-4">
            <input
                required
                type="text"
                placeholder={placeholder}
            />
        </div>
    )
}

export default HomeInput