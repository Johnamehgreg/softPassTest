import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
}

function FullScreenWidget(props: Props) {
    const {} = props

    return (
        <div className='h-[100vh] w-[100vw] justify-center flex overflow-auto'>
                <div className='w-full sm:w-10/12 px-4 md:w-[500px] mb-10'>
                     {props.children}
                    </div>
                </div>
    )
}

export default FullScreenWidget
