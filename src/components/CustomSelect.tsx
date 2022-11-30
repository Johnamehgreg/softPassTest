import { Select } from 'antd';



interface Props {
    options: any;
    placeholder: string;
    onChange?: (e: any) => void;

}


const CustomSelect: React.FC<Props> = ({ placeholder, onChange, options }) => {


    return (
        <Select
            placeholder={placeholder}
            onChange={onChange}
            size={'large'}
            style={{ width: '100%' }}
            options={options}
        />
    )
}

export default CustomSelect