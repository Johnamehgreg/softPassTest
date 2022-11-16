import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { hidePopUp } from '../../constanst/popupFunc';

interface Props {
  children?:JSX.Element
}
 
export const PopUp:React.FC<Props> = ({children, }) => {
  
      
     
  return (
    <div  id='popUp' className='side-popup items-center'>
        <div>
        <p id='popUp-title'></p>
        </div>
        {children}
        <div><MdOutlineCancel color='#fff' onClick={hidePopUp} size={22} className='icon-white pointer'/></div> 
        </div>
  )
}



