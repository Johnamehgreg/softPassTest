import React, { useState } from "react";


interface Props {
    placeholder?: string,
    onChange?: (e: any) => void;
    value?: string;
    name?: string;
    onBlur: Function;

}
const HomeInput: React.FC<Props> = ({
    placeholder,
    onChange,
    value,
    name,
    onBlur

}) => {
    const [isFocus, setisFocus] = useState(false)

    let border = isFocus ? 'border-softpasspurple-300' : 'border-gray-400'
    return (
        <div className={`${border} verification-input-contain  my-4`}>
            <input
                value={value}
                name={name}
                onFocus={() => setisFocus(true)}
                onBlur={() => {
                    setisFocus(false)
                    onBlur()
                }}
                type="text"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default HomeInput