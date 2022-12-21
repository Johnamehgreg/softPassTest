// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { motion, useAnimation } from 'framer-motion';
import * as React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


interface Props {
  options: any[],
  onChange: (e: any) => void;
  placeholder: string;
}
const AppSelect: React.FC<Props> = (props: any) => {


  const { options, onChange, placeholder } = props
  const [title, settitle] = React.useState(placeholder)
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

  console.log('@all available', options)


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
    settitle(item?.label)
    onChange(item)
  }



  return (
    <div ref={dropDownRef} className='w-full rounded-md relative h-[40px] border-[1px] border-gray-400 '>
      <div
        onClick={() => setshowDropDown(!showDropDown)}
        className="w-full flex h-full px-2 pointer justify-between items-center">
        <p className="text-gray-400  text-[14px]">{title}</p>
        <motion.div animate={arrowAni} >
          <MdKeyboardArrowDown color="#33106B" size={20} />
        </motion.div>
      </div>


      <motion.div
        animate={ani1}
        className=" bg-white z-[100] px-2 h-auto  shadow-xl top-[50px] absolute w-full  rounded-md max-h-[200px] overflow-scroll ">
        {
          options
            .map((item: any) => {
              return (
                <div
                  onClick={() => {
                    onSelect(item)
                  }}
                  className="px-2 my-2 rounded-sm flex items-center  hover:bg-gray-100 h-[30px] pointer">
                  <p className='text-[14px] text-gray-500'>{item.label}</p>
                </div>
              )
            })
        }
      </motion.div>


      {/* <Select
      defaultValue={placeholder}
      placeholder={'Hello'}
      style={{ width: '100%', marginBottom: '20px' }}
      onChange={(e) => onChange(e)}
      options={options}
      size='large'
    /> */}
    </div>
  );
}

export default AppSelect;


