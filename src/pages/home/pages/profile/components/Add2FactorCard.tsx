import { useContext, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import SuccessIcon from "../../../../../assets/svg/sucessCheck.svg";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";
import { AppProvider } from '../../../../../contextProvide/AppContext';
import { useProfileHookEvent } from '../ProfileHook';


interface Props {
    isOpen: Boolean;
    closeModal: Function;
    settab: React.Dispatch<React.SetStateAction<number>>;
    tab: number


}

const Add2Factor: React.FC<Props> = (props) => {
    const { isOpen, closeModal, tab, settab } = props;


    const [tittle, settittle] = useState('')

    const [otp, setotp] = useState('')


    useEffect(() => {
        if (tab === 2) settittle('To continue, please enter your password')
        if (tab !== 1) settittle('')
    }, [tab])


    const handleOpt = (value: any) => {
        setotp(value)
    }

    const { setisLoading, } = useContext(AppProvider)

    const onSent = () =>{
        settab(2)
     }


    const { verifyToken, request2Factor } = useProfileHookEvent()

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (tab === 2) {
            closeModal()
        } else {

            let data = {
                token: otp
            }

            verifyToken({ data, settab })
        }



    }


    return isOpen ? (
        <ModalParentModule closeModal={closeModal}>
            <div className="sm:w-[400px] w-full">
                <div className="flex py-6 px-4 w-full pb-6 items-center border-b-[1px] border-b-gray-200">
                    <h4 className="w-full text-[20px] text-softpasspurple-500 font-bold">
                        2- Factor authenticator
                        <span className="w-full text-[12px] block opacity-50 font-normal">
                            {tittle}

                        </span>
                    </h4>
                    <span
                        onClick={() => {
                            settab(1)
                            closeModal(false);
                        }}
                        className="text-[20px] modal-close-icon cursor-pointer"
                    >
                        &times;
                    </span>
                </div>

                <form
                    onSubmit={onSubmit}
                    className="w-full flex justify-center pt-2" >
                    <div className="w-10/12 pt-4">
                        {

                            tab === 1 ?




                                <div
                                    className="w-full flex justify-center "
                                >
                                    <div className="pb-5 w-full">
                                        <div className="w-full text-[15px] text-center opacity-50">Are you sure you want to enable  <br />  2-Factor authenticator?</div>
                                        <div className="w-full text-center py-3 garrif">
                                            <button
                                            type='button'
                                            onClick={() => {
                                                request2Factor({onSent})
                                            }}
                                                className="next-button">Yes, I’m Sure </button>
                                        </div>
                                        <div className="w-full text-center py-0 garrif mb-3">
                                            <button
                                                onClick={() => closeModal()}
                                                className="border-softpasspurple-300 border text-softpasspurple-300 w-full py-[10px] rounded-md">
                                                No, I’m not Sure
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                :
                                tab === 2 ?

                                    <>

                                        <span className="w-full mb-8 text-center text-[12px] block opacity-50 font-normal">
                                            Enter the authentication code sent to +234 825 567 34
                                        </span>

                                        <OtpInput
                                            value={otp}
                                            onChange={handleOpt}
                                            numInputs={4}
                                            containerStyle={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '30px',
                                                color: 'black'


                                            }}

                                            inputStyle={{
                                                width: '49px',
                                                height: '43px',
                                                border: '1px solid #D1D5DB',
                                                borderRadius: '4px',
                                                color: 'black'
                                            }}
                                            separator={<span className='mx-2'>  </span>}
                                        />


                                    </>

                                    :

                                    tab === 3 ?

                                        <>
                                            <div className="w-full flex items-center justify-center flex-col">
                                                <img alt="" src={SuccessIcon} className="rounded-2xl"></img>

                                                <p className='success-text'>Successfully Enabled</p>
                                            </div>

                                        </>
                                        :
                                        null
                        }

                        {
                            tab === 2 && (
                                <div className="w-full text-center py-3 garrif">
                                    <button
                                        type="submit"
                                        className="next-button">Submit</button>
                                </div>
                            )
                        }
                        {
                            tab === 2 && (
                                <div className="w-full text-center py-3 garrif">
                                    <button
                                    onClick={() => closeModal()}
                                        type="button"
                                        className="next-button">Close</button>
                                </div>
                            )
                        }
                    </div>
                </form>
            </div>
        </ModalParentModule>
    ) : null
}


export default Add2Factor