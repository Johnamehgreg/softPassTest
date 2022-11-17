import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

function HeroWidget(props: Props) {
    const {} = props

    return (
        <div className='hero-widget'>
            {props.children}
        </div>
    )
}

export default HeroWidget
