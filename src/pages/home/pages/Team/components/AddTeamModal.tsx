import React from "react";
import AppSelect from "../../../../../components/AppComponent/AppSelect";
import HomeInput from "../../../../../components/input/homeInput";
import ModalParentModule from "../../../../../components/widget/ModalParentModule";

interface Props {
    isOpen: Boolean;
    closeModal: Function;
}
const AddTeamModal: React.FC<Props> = ({ closeModal, isOpen }) => {

    let currentRole = [
        {
            value: "Software Engineer",
            label: "Software Engineer",
        },
        {
            value: "Product Manager",
            label: "Product Manager",
        },
        {
            value: "Founder",
            label: "Founder",
        },
        {
            value: "Others",
            label: "Others",
        },


    ]
    return isOpen ? (

        <ModalParentModule closeModal={closeModal}>

            <div className="w-full sm:w-[400px]">
                <div className="flex py-3 px-4 w-full items-center border-b-[1px] border-b-gray-200">
                    <h4 className="w-full text-[22px]">Add to your team</h4>
                    <span
                        onClick={() => {
                            closeModal();
                        }}
                        className="text-[20px] cursor-pointer"
                    >
                        &times;
                    </span>
                </div>

                <div className="px-6 py-3">



                    <div>
                        <form>
                            <HomeInput
                                placeholder="Full Name "
                                onBlur={() => console.log('flkf')}
                                onChange={() => console.log('flkf')} />
                            <HomeInput
                                placeholder="official email address"
                                onBlur={() => console.log('flkf')}
                                onChange={() => console.log('flkf')} />

                            <AppSelect
                                placeholder="Current role"
                                onChange={(e: any) => console.log('dkmd')}
                                options={currentRole} />
                            <button className="w-full bg-softpasspurple-300 text-white py-3 rounded-md text-[14px] font-semibold mb-4">
                                Add member
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </ModalParentModule>
    )
        : null;
}

export default AddTeamModal
