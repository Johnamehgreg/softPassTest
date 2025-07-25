import React from 'react'

interface Props {
    width: string | number,
}

function EyeSlashIcon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1083 7.8916L7.8916 12.1083C7.34994 11.5666 7.0166 10.8249 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C10.8249 7.0166 11.5666 7.34994 12.1083 7.8916Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.8499 4.8084C13.3915 3.7084 11.7249 3.1084 9.99987 3.1084C7.0582 3.1084 4.31654 4.84173 2.4082 7.84173C1.6582 9.01673 1.6582 10.9917 2.4082 12.1667C3.06654 13.2001 3.8332 14.0917 4.66654 14.8084" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M7.0166 16.2751C7.9666 16.6751 8.97493 16.8917 9.99993 16.8917C12.9416 16.8917 15.6833 15.1584 17.5916 12.1584C18.3416 10.9834 18.3416 9.0084 17.5916 7.8334C17.3166 7.40006 17.0166 6.99173 16.7083 6.6084" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path opacity="0.4" d="M12.9252 10.5833C12.7085 11.7583 11.7502 12.7166 10.5752 12.9333" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.89199 12.1084L1.66699 18.3334" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.3334 1.66675L12.1084 7.89175" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> 
    )
}

export default EyeSlashIcon
