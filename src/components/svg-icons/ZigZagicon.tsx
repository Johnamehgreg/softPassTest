import React from 'react'

interface Props {
    width: string | number
}

function ZigZagicon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8416 0.869629L23.0702 4.09829L16.1899 10.9786L10.5504 5.339L0.103027 15.8004L2.09098 17.7884L10.5504 9.329L16.1899 14.9686L25.0723 6.10034L28.3009 9.329V0.869629H19.8416Z" fill="white"/>
        </svg>
    )
}

export default ZigZagicon
