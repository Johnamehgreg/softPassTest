// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { motion, useAnimation } from 'framer-motion';
import * as React from 'react';
import { ReactComponent as ArrowDown } from '../../../assets/image/svg/ArrowDown.svg';


interface Props {

}
const LogoutDropDown: React.FC<Props> = (props: any) => {

  const [showDropDown, setshowDropDown] = React.useState(false)
  const ani1 = useAnimation()
  const arrowAni = useAnimation()
  let dropDownRef = React.useRef<any>()

  React.useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!dropDownRef.current.contains(event.target)) {
        setshowDropDown(false)
      }
    })
  })




  React.useEffect(() => {
    if (showDropDown) {
      ani1.start({

        scale: 1,
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    } else {
      ani1.start({
        scale: 0,
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    }
    if (showDropDown) {
      arrowAni.start({
        x: 0,
        rotate: '0deg',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    } else {
      arrowAni.start({
        x: 0,
        rotate: '180deg',
        transition: {
          type: 'spring',
          duration: 0.3,
          bounce: 0.3
        }
      })
    }
  }, [showDropDown])

  const onSelect = (item: any) => {
    setshowDropDown(false)


  }



  return (
    <div ref={dropDownRef} className='w-full  relative  '>
      <div
        onClick={() => setshowDropDown(!showDropDown)}>


        <motion.div animate={arrowAni} >
          <span
            className='w-[25px] h-[25px] bg-gray-100 grid place-items-center pointer rounded-full'>
            <ArrowDown />
          </span>
        </motion.div>
      </div>


      <motion.div
        animate={ani1}
        className=" bg-white z-[100] px-2 h-auto  shadow-xl right-[-20px] top-[20px] absolute    rounded-md  overflow-scroll ">
        <div
          onClick={() => {

          }}
          className="px-2 my-2 rounded-sm flex items-center  hover:bg-gray-100 h-[30px] pointer">
          <p className='text-[14px] text-gray-500'>Logout</p>
        </div>
      </motion.div>


    </div>
  );
}

export default LogoutDropDown;


