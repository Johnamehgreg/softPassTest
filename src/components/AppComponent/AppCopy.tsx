import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";


interface Props {
    children: JSX.Element,
    text:string
}
const AppCopy: React.FC<Props> = (props: any) => {

    const { children, text } = props

    const ani1 = useAnimation()

    const [showCopy, setshowCopy] = useState(false)

    const copy = async () => {
        if (!navigator?.clipboard) {
          console.warn('Clipboard not supported')
          return false
        }
    
        // Try to save to clipboard then save it in the state if worked
        try {
          await navigator.clipboard.writeText(text)
         
          return true
        } catch (error) {
          console.warn('Copy failed', error)
          
          return false
        }
      }


    const onClick = () => {
        setshowCopy(true)
       copy()
        setTimeout(() => {
            setshowCopy(false)
        }, 2000)
    }

   
    
    
    return (
        <div
            onClick={() => onClick()}
            className="w-10 pointer relative flex items-center justify-center mx-2 ">
            {children}

            <motion.div 
            animate={{
                display: showCopy ? 'flex' : 'none',
                transition: {
                    type: 'spring',
                    duration: 0.3,
                    bounce: 0.3,
    
                  }, 
            }}
            className="w-[50px] left-[50%] translate-x-[-50%] flex items-center justify-center top-[-20px] absolute h-[25px] rounded-md bg-blue-900">
                <p className="text-white text-[10px]">Copy</p>
            </motion.div>
        </div>
    )
}

export default AppCopy
