import { SelectChangeEvent } from '@mui/material/Select';
import { Switch } from 'antd';
import { Moment } from 'moment';
import React, { useContext, useEffect, useState } from "react";
import AppOutlineInput from '../../../../components/AppComponent/AppOutlineInput';
import { AppProvider } from '../../../../contextProvide/AppContext';
import Add2Factor from './components/Add2FactorCard';


interface Props { }

const Profile: React.FC = (props: Props) => {
    const { } = props;

    //VARIABLES
    const [headerTitle, setHeaderTitle] = useState("");
    const [fromUniqueInput, setFormUniqueInput] = useState([]);
    const [age, setAge] = React.useState('');
    const [toggleBtn, settoggleBtn] = useState(false)
    const [isModalOPen , setisModalOPen ] = useState(false)
    const [tab, settab] = useState(1)
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const { userDetail, setisLoading } = useContext(AppProvider)



    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
        settoggleBtn(checked)
        

        if(checked === true ){
            setisModalOPen(true)
           
        }
        
    };

    //FUNCTION



    // useEffect(() => {
    //     settopNavData({
    //         title: `Profile Settings`,
    //         message: 'Manage your team member activities as well as transaction history',
    //     })
    // }, [])

    useEffect(() => {
     console.log('@asset data ', userDetail)
     if(userDetail?.is_2fa_enabled) {
        settoggleBtn(userDetail?.is_2fa_enabled)
     }
    }, [userDetail])
    

    return (
        <>

            <section className="bg-white mt-8 pb-4 garrif rounded-md">
                <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
                    <h1 className="w-6/12 text-[22px] font-semibold">Account Information</h1>

                </div>

                <div className="border-t-[1px] border-gray-500 px-2 flex justify-center w-full">
                    <div className="lg:w-11/12 w-full pt-5 flex flex-wrap  ">
                        <div className="w-full sm:w-5/12 md:w-4/12 sm:mr-4">

                            <AppOutlineInput 
                            isDisable={true}
                            value={`${userDetail?.first_name} . ${userDetail?.last_name}`}
                            placeholder='Name of Staff' />
                            <AppOutlineInput 
                            isDisable={true}
                            value={`${userDetail?.first_name}`}
                            placeholder='Phone No' />
                            <AppOutlineInput 
                             isDisable={true}
                             value={`${userDetail?.business_name}`}
                            placeholder='Company Name' />
                            <AppOutlineInput 
                             isDisable={true}
                             value={`${userDetail?.first_name}`}
                            placeholder='Company Address' />


                        </div>
                        <div className="w-full sm:w-5/12 md:w-5/12 flex flex-wrap md:pl-7 md:pr-18 mb-5">

                            <AppOutlineInput 
                            isDisable={true}
                            value={`${userDetail?.email}`}
                            placeholder='Status' />
                            <AppOutlineInput 
                             isDisable={true}
                             value={`${userDetail?.email}`}
                            placeholder='Email' />
                            <AppOutlineInput 
                            isDisable={true}
                            value={`${userDetail?.country}`}
                            placeholder='Country' />
                            <AppOutlineInput 
                            isDisable={true}
                            value={`${userDetail?.email}`}
                            placeholder='State' />

                        </div>
                    </div>
                </div>

                <div className="flex mb-8 items-center  px-10 ">
                    <p className='text-[12px] mr-[10px]' >Enable 2-factor authentication</p>
                    <Switch
                    
                    size='small' checked={toggleBtn} onChange={onChange} />
                </div>
            </section>

            <Add2Factor tab={tab} settab={settab} isOpen={isModalOPen} closeModal={() => setisModalOPen(false)} />
        </>
    );
};

export default Profile;
function settopNavData(arg0: { title: string; message: string; }) {
    throw new Error('Function not implemented.');
}

function getGreetingTime(arg0: Moment) {
    throw new Error('Function not implemented.');
}

