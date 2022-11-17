import React from 'react'

interface Props {
    width: string | number,
}

function CheckIcon(props: Props) {
    const { width} = props

    return (
        <svg width={width} height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.84863 6.30644L5.07767 9.53547L13.1502 1.46289" stroke="white" stroke-width="1.93742" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default CheckIcon
