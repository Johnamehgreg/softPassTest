import React from 'react'

interface Props {
    color: string ,
    width: string | number
}

function ArrowDown(props: Props) {
    const { color, width } = props

    return (
        <svg width={width} height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.05554L4.5 4.94443L8 1.05554" stroke={color} stroke-width="2"/>
        </svg>
    )
}

export default ArrowDown
