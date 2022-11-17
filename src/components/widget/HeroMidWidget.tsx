import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

function HeroMidWidget(props: Props) {
    const {} = props

    return (
        <div className='hero-mid-widget'>
            {props.children}
        </div>
    )
}

export default HeroMidWidget
