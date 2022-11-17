import React from 'react'

interface Props {
    width: string | number,
    color: string
}

function ScanIcon(props: Props) {
    const { width, color } = props

    return (
        <svg width={width} height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.20288 8.99976V6.49976C2.20288 4.00976 4.21288 1.99976 6.70288 1.99976H9.20288" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.2029 1.99976H17.7029C20.1929 1.99976 22.2029 4.00976 22.2029 6.49976V8.99976" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2029 15.9998V17.4998C22.2029 19.9898 20.1929 21.9998 17.7029 21.9998H16.2029" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.20288 21.9998H6.70288C4.21288 21.9998 2.20288 19.9898 2.20288 17.4998V14.9998" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.4">
        <path d="M17.2029 9.49976V14.4998C17.2029 16.4998 16.2029 17.4998 14.2029 17.4998H10.2029C8.20288 17.4998 7.20288 16.4998 7.20288 14.4998V9.49976C7.20288 7.49976 8.20288 6.49976 10.2029 6.49976H14.2029C16.2029 6.49976 17.2029 7.49976 17.2029 9.49976Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.2029 11.9998H5.20288" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}

export default ScanIcon
