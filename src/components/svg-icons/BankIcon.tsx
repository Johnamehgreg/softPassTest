import React from 'react'

interface Props {
    width: string | number
}

function BankIcon(props: Props) {
    const { width } = props

    return (
        <svg width={ width } height="52" viewBox="0 0 45 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.1937 4.64008L40.0687 12.3127C40.725 12.6111 41.25 13.5062 41.25 14.2948V21.3707C41.25 22.5429 40.4063 23.502 39.375 23.502H5.625C4.59375 23.502 3.75 22.5429 3.75 21.3707V14.2948C3.75 13.5062 4.27501 12.6111 4.93126 12.3127L21.8063 4.64008C22.1813 4.46958 22.8187 4.46958 23.1937 4.64008Z" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41.25 46.9461H3.75V40.5522C3.75 39.38 4.59375 38.4209 5.625 38.4209H39.375C40.4063 38.4209 41.25 39.38 41.25 40.5522V46.9461Z" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M7.5 38.421V23.502" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M15 38.421V23.502" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M22.5 38.421V23.502" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M30 38.421V23.502" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M37.5 38.421V23.502" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1.875 46.9463H43.125" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M22.5 18.1737C24.0533 18.1737 25.3125 16.7424 25.3125 14.9767C25.3125 13.2111 24.0533 11.7798 22.5 11.7798C20.9467 11.7798 19.6875 13.2111 19.6875 14.9767C19.6875 16.7424 20.9467 18.1737 22.5 18.1737Z" stroke="#FA7436" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default BankIcon
