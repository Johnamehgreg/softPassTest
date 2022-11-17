import React, { Children, ReactNode } from 'react'
import CircleBreakIcon from '../svg-icons/CircleBreakIcon'

interface Props {
    children: ReactNode;
    active? : boolean
}

function LandingPageCard(props: Props) {
    const { active } = props

    return (
        <div  
        className={`w-[calc(100%-16px)] bg-white mx-2 landing-page-card first-letter pt-8 hover:pb-[200px]`}
        style={{transition:'1s'}}
        >
            {props.children}
        </div>
    )
}

export default LandingPageCard
