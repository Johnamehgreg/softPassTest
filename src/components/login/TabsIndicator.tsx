import React from 'react'
import CheckIcon from '../svg-icons/CheckIcon'

interface Props {
    initial_tab: number | string,
    setCurrentTab: React.Dispatch<React.SetStateAction<number>>
}

const TabsIndicator:React.FC<Props> = ({initial_tab, setCurrentTab}) =>  {

    return (
       <div className='xs:w-full w-[400px] flex items-center justify-center'>
           <div className={`active-tab
           ${initial_tab >= 1 ? 'initial-tab' : ''}`}>
                <i>
                    { initial_tab > 1 ?  <abbr  onClick={() => setCurrentTab(1)} className='tab-check pointer'><CheckIcon width={'20'}/></abbr> 
                    : <i></i>               
                    }
                </i>
                <span></span>
           </div>
           
           <div className={`active-tab 
           ${initial_tab >= 2 ? ' initial-tab' : ''}`}>
                <i> 
                { initial_tab > 2 ?  <abbr onClick={() => setCurrentTab(2)} className='tab-check pointer'><CheckIcon  width={'20'}/></abbr> 
                    : <i></i>               
                    }
                </i>
                <span></span>
           </div>

           <div className={`active-tab
           ${initial_tab >= 3 ? ' initial-tab' : ''}`}>
                <i>
                { initial_tab > 3 ?  <abbr  onClick={() => setCurrentTab(3)} className='tab-check pointer'><CheckIcon width={'20'}/></abbr> 
                    : <i></i>               
                    }
                </i>
                <span></span>
           </div>
       </div>
    )
}

export default TabsIndicator
