import React from 'react';
import { AiOutlineStop } from 'react-icons/ai';
import { MdCheckCircleOutline, MdClose } from 'react-icons/md';
import { hidePopUp } from '../../constanst/popupFunc';

interface Props {
  children?: JSX.Element
}

export const PopUp: React.FC<Props> = ({ children, }) => {



  return (
    <div id='popUp' className='side-popup pl-4  pointer  items-center'>
      <div className='flex items-center'>
        <AiOutlineStop id='popUp-error-icon' color='#EB5757'  size={35} />
        <MdCheckCircleOutline id='popUp-success-icon' color='#6FCF97' size={35} />
        <div className='ml-4'>
          <p id='popUp-title' className='gotham'>successsfull</p>
          <p id='popUp-message' className='gotham'>Lorem pasimum ntcfeto.</p>
        </div>
      </div>
      {children}
      <div><MdClose color='#000' onClick={hidePopUp} size={22} className='side-popup-close-icon ' /></div>
    </div>
  )
}



