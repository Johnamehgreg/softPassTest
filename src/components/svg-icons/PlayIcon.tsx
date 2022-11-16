import React from 'react'

interface Props {
    width: string | number,
}

function PlayIcon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.7922 5.18134L11.2224 9.91858L3.7922 14.6558V5.18134ZM0.972412 0.0493164V19.7878L16.4813 9.91858L0.972412 0.0493164Z" fill="white"/>
        </svg>
    )
}

export default PlayIcon
