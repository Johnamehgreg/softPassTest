import React, { useState } from "react";


interface Props {
    placeholder?: string,
    onChange: (e: any) => void;
    value?: string;
    name?: string;
    onBlur: Function;
    required?:boolean,
    disabled?:boolean,

}
const HomeInput: React.FC<Props> = ({
    placeholder,
    onChange,
    value,
    name,
    onBlur,
    required,
    disabled

}) => {
    const [isFocus, setisFocus] = useState(false)

    let border = isFocus ? 'border-softpasspurple-300' : 'border-gray-400'
    return (
        <div className={`${border} verification-input-contain  my-4`}>
            <input
                value={value}
                name={name}
                disabled={disabled}
                onFocus={() => setisFocus(true)}
                onBlur={() => {
                    setisFocus(false)
                    onBlur()
                }}
                type="text"
                onChange={(e:any) => onChange(e)}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

export default HomeInput