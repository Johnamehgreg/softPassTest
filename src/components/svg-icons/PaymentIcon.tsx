import React from 'react'

interface Props {
    width: string | number,
}

function PaymentIcon(props: Props) {
    const { width } = props

    return (
        <svg width={ width } height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.90234 16.3428H27.3398" stroke="#311996" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.4023 31.3428H15.1523" stroke="#311996" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.8398 31.3428H27.3398" stroke="#311996" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M41.4023 26.7115V30.6115C41.4023 37.1928 39.7336 38.8428 33.0773 38.8428H12.2273C5.57109 38.8428 3.90234 37.1928 3.90234 30.6115V15.199C3.90234 8.61777 5.57109 6.96777 12.2273 6.96777H27.3398" stroke="#311996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <g opacity="0.4">
        <path d="M37.6523 6.96777V18.2178L41.4023 14.4678" stroke="#311996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M37.6523 18.2178L33.9023 14.4678" stroke="#311996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}

export default PaymentIcon
