import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import React from 'react';
import { ReactComponent as ArrowDown } from "../../assets/image/svg/ArrowDown.svg";


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <p>1st menu item</p>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];


interface Props {
  placeholder:string
}

const AppDropDownT: React.FC<Props> = ({placeholder}) => (
  <>

    <Dropdown menu={{ items }} placement="bottom" arrow>
      <b className="table-filter-item pointer">
        {placeholder}{" "}
        <i className="pt-[3px]">
          <ArrowDown color={"black"} width={"17"} />
        </i>
      </b>
    </Dropdown>



  </>
);

export default AppDropDownT;

