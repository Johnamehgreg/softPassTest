import React from 'react'

interface Props {
    width: string | number,
}

function Facebookicon(props: Props) {
    const { width } = props

    return (
        <svg width={width} height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 11.5704C23 5.1801 17.8515 0 11.5014 0C5.14848 0.00143732 0 5.1801 0 11.5719C0 17.3456 4.2056 22.1319 9.70191 23V14.9151H6.78415V11.5719H9.70479V9.02062C9.70479 6.12155 11.4224 4.52037 14.0484 4.52037C15.3075 4.52037 16.6226 4.74603 16.6226 4.74603V7.59193H15.1724C13.7451 7.59193 13.2995 8.4845 13.2995 9.40008V11.5704H16.4875L15.9787 14.9136H13.2981V22.9986C18.7944 22.1304 23 17.3441 23 11.5704Z" fill="#E12179"/>
        </svg>
    )
}

export default Facebookicon
