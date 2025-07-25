import React from 'react'

interface Props {
    width: string | number
}

function WalletIcon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z" fill="#292D32"/>
        <path d="M17.7504 7.05C17.5104 7.01 17.2604 7.00001 17.0004 7.00001H7.00043C6.72043 7.00001 6.45043 7.02001 6.19043 7.06001C6.33043 6.78001 6.53043 6.52001 6.77043 6.28001L10.0204 3.02C11.3904 1.66 13.6104 1.66 14.9804 3.02L16.7304 4.79002C17.3704 5.42002 17.7104 6.22 17.7504 7.05Z" fill="#292D32"/>
        <path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" fill="#292D32"/>
        </svg> 
    )
}

export default WalletIcon
