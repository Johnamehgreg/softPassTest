import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode,
    bg: String
}

function FullWidth(props: Props) {
    const { children, bg} = props

    return (
        <div className={`w-full justify-center flex flex-wrap bg-${bg}`}>
            {children}
        </div>
    )
}

export default FullWidth
