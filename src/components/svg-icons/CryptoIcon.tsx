import React from 'react'

interface Props {
    width: string | number
}

function CryptoIcon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.48633 32.2769H22.8197" stroke="#FFB60A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.55627 25.75H18.7497C22.013 25.75 22.8197 26.5567 22.8197 29.7833V37.3183C22.8197 40.545 22.013 41.3517 18.7497 41.3517H8.55627C5.29294 41.3517 4.48633 40.545 4.48633 37.3183V29.7833C4.48633 26.5567 5.29294 25.75 8.55627 25.75Z" stroke="#FFB60A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M41.1536 28.5C41.1536 35.595 35.4153 41.3333 28.3203 41.3333L30.2453 38.125" stroke="#FFB60A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M4.48633 17.4998C4.48633 10.4048 10.2247 4.6665 17.3197 4.6665L15.3947 7.87484" stroke="#FFB60A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M34.7363 21.1665C39.2927 21.1665 42.9863 17.4729 42.9863 12.9165C42.9863 8.36015 39.2927 4.6665 34.7363 4.6665C30.18 4.6665 26.4863 8.36015 26.4863 12.9165C26.4863 17.4729 30.18 21.1665 34.7363 21.1665Z" stroke="#FFB60A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default CryptoIcon
