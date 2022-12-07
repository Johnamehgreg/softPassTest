import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import SuccessIcon from "../../../../../assets/svg/sucessCheck.svg";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";


interface Props {
    isOpen: Boolean;
    closeModal: Function;


}

const Add2Factor: React.FC<Props> = (props) => {
    const { isOpen, closeModal, } = props;

    const [tab, settab] = useState(1)

    const [tittle, settittle] = useState('To continue, please enter your password')

    const [otp, setotp] = useState('')

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        settab(tab + 1)
    }

    useEffect(() => {
      if(tab === 1) settittle('To continue, please enter your password')
      if(tab !== 1) settittle('')
    }, [tab])
    

    const handleOpt = (value: any) => {
        setotp(value)
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

                                <>
                                    <TextField
                                        // placeholder="Email"
                                        InputLabelProps={{
                                            style: { color: '#6B7280' },
                                        }}
                                        style={{
                                            width: '100%',
                                            borderRadius: '20px',
                                            marginBottom: '30px',
                                            color: '#6B7280'
                                        }}
                                        size='small'
                                        id="outlined-basic"
                                        label='Email'
                                        variant="outlined" />
                                    <TextField
                                        // placeholder="Email"
                                        InputLabelProps={{
                                            style: { color: '#6B7280' },
                                        }}
                                        style={{
                                            width: '100%',
                                            borderRadius: '20px',
                                            marginBottom: '10px',
                                            color: '#6B7280'
                                        }}
                                        size='small'
                                        id="outlined-basic"
                                        label='Enter password'
                                        variant="outlined" />


                                </>

                                : tab === 2 ?

                                    <>

                                        <span className="w-full mb-8 text-center text-[12px] block opacity-50 font-normal">
                                            We will text you a verification code to this mobile number <br /> whenenever you sign in to your account
                                        </span>
                                        <TextField
                                            // placeholder="Email"
                                            InputLabelProps={{
                                                style: { color: '#6B7280' },
                                            }}
                                            style={{
                                                width: '100%',
                                                borderRadius: '20px',
                                                marginBottom: '30px',
                                                color: '#6B7280'
                                            }}
                                            size='small'
                                            id="outlined-basic"
                                            label='Phone Number'
                                            variant="outlined" />



                                    </>
                                    : tab === 3 ?

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

                                        tab === 4 ?

                                            <>
                                                <div className="w-full flex items-center justify-center flex-col">
                                                    <img alt="" src={SuccessIcon} className="rounded-2xl"></img>

                                                    <p className='success-text'>Successfully Enabled</p>
                                                </div>

                                            </>
                                            :
                                            null
                        }

                        <div className="w-full text-center py-3 garrif">
                            <button
                                type="submit"
                                className="next-button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </ModalParentModule>
    ) : null
}


export default Add2Factor