import React from 'react'

interface Props {
    width: string | number,
    color: string
}

function Navicon(props: Props) {
    const { width, color } = props

    return (
        <svg width={width} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default Navicon
