import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import React from 'react';
import { ReactComponent as ArrowDown } from "../../assets/image/svg/ArrowDown.svg";





interface Props {
  placeholder: string,
  setState: React.Dispatch<any>
}

const AppDropDownT: React.FC<Props> = ({setState, placeholder }) => { 

const items: MenuProps['items'] = [
  {
    key: 'COMPLETED',
    label: (
      <p onClick={() => setState('COMPLETED')}>COMPLETED</p>
    ),
  },
  {
    key: 'FAILED',
    label: (
      <p onClick={() => setState('FAILED')}>
        FAILED
      </p>
    ),
  },
  {
    key: 'PENDING',
    label: (
      <p  onClick={() => setState('PENDING')}>
        PENDING
      </p>
    ),
  },
  {
    key: 'CANCELLED',
    label: (
      <p onClick={() => setState('CANCELLED')}>
        CANCELLED
      </p>
    ),
  },
];
return (


  <>

    <Dropdown

      onOpenChange={(e) => console.log(e, 'value selected')}
      menu={{ items }} placement="bottom" arrow>
      <b className="table-filter-item pointer">
        {placeholder}{" "}
        <i className="pt-[3px]">
          <ArrowDown color={"black"} width={"17"} />
        </i>
      </b>
    </Dropdown>



  </>

)
}

export default AppDropDownT;

