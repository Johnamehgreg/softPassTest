import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AppWrapper from "../../../../components/AppWrapper";
import HomeInput from "../../../../components/input/homeInput";
import { AppProvider } from "../../../../contextProvide/AppContext";
import { useComplianceEvent, useHandleComplianceUpdate } from "./compliance-hook";
import TopCard from "./components/TopCard";
import UploadInout from "./components/uplaodInput";
// import HomeEdictor from "../components/Edictor";
// import S3 from "react-aws-s3";


interface Props { }


const Compliance: React.FC = (props: Props) => {
    const { } = props;




    //VARIABLES

    const [errorText, seterrorText] = useState('Retry')
    const [isSuccess, setisSuccess] = useState(false)
    const [isError, setisError] = useState(false)
    const [showModal, setshowModal] = useState(true)
    const { setisLoading } = useContext(AppProvider)
    const [complincesInputData, setcomplincesInputData] = useState<any>({
        tax_id: '',
        team_size: '',
        organization_name: '',
        director_name: '',
        director_email: '',
        director_phone: '',
        bvn: '',
        cac_rc: '',
        address_verification: '',
        cac_form: '',
        isCacForm: false,
        isAddressVerification: false,

    })

    const [isCC_Form, setisCC_Form] = useState<any>({
        isSelected: false,
        isUploaded: false,
        url: '',
        file: '',
        uploadedUrl: null
    })

    const [preview, setpreview] = useState({
        url: '',
        type: ''
    })

    const [isUPA_Form, setisUPA_Form] = useState<any>({
        isSelected: false,
        isUploaded: false,
        url: '',
        file: '',
        uploadedUrl: null
    })


    const onError = () => {
        setisError(true)
        setisSuccess(false)
        seterrorText('Retry')

    }

    const {
        data,
        isFetched,
        isSuccess: isDataSuccess,

        refetch
    } = useComplianceEvent({ onError, })


    const { update, uploadImage } = useHandleComplianceUpdate(refetch)



    const onRefetch = () => {
        refetch()
        seterrorText('Retrying...')
    }

    useEffect(() => {

    }, [isCC_Form?.isSelected, isUPA_Form?.isSelected])







    const checkSuccess = () => {

        if (isFetched && isDataSuccess) {
            setisError(false)
            setisSuccess(true)
            // setcomplinceDetail(data?.data)
            let lData = data?.data
            setcomplincesInputData({
                ...complincesInputData,
                tax_id: lData.tax_id,
                organization_name: lData.organization_name,
                director_name: lData.director_name,
                director_email: lData.director_email,
                director_phone: lData.director_phone,
                bvn: lData.bvn,
                team_size: lData.team_size,
                cac_rc: lData.cac_rc,
                address_verification: lData.address_verification,
                cac_form: lData.cac_form,
                isAddressVerification: lData.address_verification.length > 4 ? true : false,
                isCacForm: lData.cac_form.length > 4 ? true : false
            })


            console.log(complincesInputData, '@complinces data')
        }
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        setisLoading(true)
        const data = new FormData();
        data.append("cloud_name", "softpass");
        data.append("upload_preset", "soieburj")
        data.append("api_secret", "1SmKMTGGZ6auOJmdq3P6CcEUtdk");
        data.append("api_key", "532628562871137");
        let url = `https://api.cloudinary.com/v1_1/softpass/upload`
        if (isCC_Form.isSelected === true) {

            data.append("file", isCC_Form.file);

            axios.post(url, data)
                .then((res: any) => {

                    setisCC_Form({ ...isCC_Form, isUploaded: true })

                    let data = {
                        "cac_form": res.data.secure_url
                    }
                    const setdefualt = () => {
                        setisCC_Form({ ...isCC_Form, file: '', url: '', isUploaded: true, isSelected: false })
                    }
                    uploadImage({ data, setdefault: setdefualt })
                })
                .catch((err) => {
                    console.error(err, 'response upload')
                })

        }

        if (isUPA_Form.isSelected === true) {
            data.append("file", isUPA_Form.file);

            axios.post(url, data)
                .then((res: any) => {
                    setisUPA_Form({ ...isUPA_Form, isUploaded: true })
                    let data = {
                        "address_verification": res.data.secure_url
                    }

                    const setdefualt = () => {
                        setisUPA_Form({ ...isUPA_Form, file: '', url: '', isSelected: false })
                    }
                    uploadImage({ data, setdefault: setdefualt })

                })
                .catch((err) => {

                })

        }


        onUpdate()
    }


    const onUpdate = () => {

        let lData = data?.data

        let dataS: any = {}


        if (complincesInputData.tax_id !== lData?.tax_id && complincesInputData.tax_id?.trim() !== '') {
            let tax_id = complincesInputData.tax_id
            dataS.tax_id = tax_id
        }
        if (complincesInputData.director_name !== lData?.director_name && complincesInputData.director_name?.trim() !== '') {
            let director_name = complincesInputData.director_name
            dataS.director_name = director_name
        }
        if (complincesInputData.director_email !== lData?.director_email && complincesInputData.director_email?.trim() !== '') {
            let director_email = complincesInputData.director_email
            dataS.director_email = director_email
        }
        if (complincesInputData.director_phone !== lData?.director_phone && complincesInputData.director_phone?.trim() !== '') {
            let director_phone = complincesInputData.director_phone
            dataS.director_phone = director_phone
        }
        if (complincesInputData.bvn !== lData?.bvn && complincesInputData.bvn?.trim() !== '') {
            let bvn = complincesInputData.bvn
            dataS.bvn = bvn
        }
        if (complincesInputData.team_size !== lData?.team_size && complincesInputData.team_size?.trim() !== '') {
            let team_size = complincesInputData.team_size
            dataS.team_size = team_size
        }
        if (complincesInputData.organization_name !== lData?.organization_name && complincesInputData.organization_name?.trim() !== '') {
            let organization_name = complincesInputData.organization_name
            dataS.organization_name = organization_name
        }
        if (complincesInputData.cac_rc !== lData?.cac_rc && complincesInputData.cac_rc?.trim() !== '') {
            let cac_rc = complincesInputData.cac_rc
            dataS.cac_rc = cac_rc
        }




        update(dataS)
    }


    useEffect(() => {
        checkSuccess()
    }, [data])
    
    const handleReUpload = (e:any) => {
        if(preview.type === 'cac' ){
            setisCC_Form({ ...isCC_Form, isSelected: true, file: e })
        }else {
            setisUPA_Form({ ...isUPA_Form, isSelected: true, file: e })
        }
    }

    return (
        <AppWrapper
            errorText={errorText}
            onRefetch={() => onRefetch()}
            isSuccess={isSuccess}
            isError={isError}

        >
            <>
                <TopCard />
                <form
                    onSubmit={(e) => onSubmit(e)}
                    className="bg-white  garrif rounded-md">
                    <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
                        <h1 className="w-6/12 text-[22px] font-semibold">Customer credentials</h1>
                    </div>

                    <div className="border-t-[1px] px-8 border-gray-500  flex  w-full">
                        <div className="lg:w-11/12 w-full pt-5 flex flex-wrap justify-between">
                            <div className="w-full md:w-4/12 ">
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.organization_name}
                                    placeholder="Business Name"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, organization_name: e.target.value })
                                    }}

                                />
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.team_size}
                                    placeholder="Company size"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, team_size: e.target.value })
                                    }}

                                />
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.tax_id}
                                    placeholder="Tax ID Number"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, tax_id: e.target.value })
                                    }}

                                />
                            </div>
                            <div className="w-full md:w-7/12 flex flex-wrap md:pl-7 mb-5">

                            </div>
                        </div>
                    </div>

                    <div className="flex items-center px-3 md:px-5 py-4 rounded-lg bg-softpassgray-50 md:bg-transparent">
                        <h1 className="w-6/12 text-[22px] font-semibold">Director Information</h1>
                    </div>

                    <div className="border-t-[1px] px-8  border-gray-500 flex  ">
                        <div className="w-full md:w-5/6 md:pl-4   pt-5 flex flex-wrap justify-between">
                            <div className="w-full md:w-5/12 ">
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.director_name}
                                    placeholder="Name"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, director_name: e.target.value })
                                    }}

                                />
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.director_email}
                                    placeholder="Email"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, director_email: e.target.value })
                                    }}

                                />
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.director_phone}
                                    placeholder="Phone number"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, director_phone: e.target.value })
                                    }}

                                />
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.bvn}
                                    placeholder="BVN"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, bvn: e.target.value })
                                    }}

                                />


                            </div>
                            <div className="w-full md:w-5/12 ">
                                <HomeInput
                                    onBlur={() => console.log('')}
                                    name='containerName'
                                    value={complincesInputData.cac_rc}
                                    placeholder="Company registration number"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, cac_rc: e.target.value })
                                    }}

                                />


                                <UploadInout
                                    type="CAC"
                                    isUpload={complincesInputData.isCacForm}
                                    fileName={isCC_Form.file?.name}
                                    placeholder='Upload Certificate of Incorporation'
                                    onFileSelect={(e) => {
                                        // alert('1')
                                        setisCC_Form({ ...isCC_Form, isSelected: true, file: e })
                                    }}
                                />

                                {
                                    complincesInputData.isCacForm && (
                                        <div
                                            onClick={() => {
                                                setshowModal(true)
                                                setpreview({
                                                    ...preview,
                                                    url: complincesInputData.cac_form,
                                                    type: 'cac'
                                                })
                                            }}
                                            className="pointer flex items-center justify-center h-[20px] rounded-md w-[80px] bg-softpasspurple-300 text-white text-[11px] mt-[-10px]">
                                            <p>Preview</p>
                                        </div>
                                    )
                                }



                                <UploadInout
                                    type="UPA"
                                    isUpload={complincesInputData.isAddressVerification}
                                    fileName={isUPA_Form?.file?.name}
                                    placeholder='Upload Proof of Address'
                                    onFileSelect={(e) => {
                                        setisUPA_Form({ ...isUPA_Form, isSelected: true, file: e })
                                    }}
                                />

                                {
                                    complincesInputData.isAddressVerification && (
                                        <div
                                            onClick={() => {
                                                setshowModal(true)
                                                setpreview({
                                                    ...preview,
                                                    url: complincesInputData.address_verification,
                                                    type: 'address'
                                                })
                                            }}
                                            className="pointer flex items-center justify-center h-[20px] rounded-md w-[80px] bg-softpasspurple-300 text-white text-[11px] mt-[-10px]">
                                            <p>Preview</p>
                                        </div>
                                    )
                                }





                                <div className="w-full mt-8  mb-8 justify-end flex  ">
                                    <button type="submit" className="min-w[20px] bg-softpasspurple-300 px-6 py-1 rounded-md text-white">Save</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>

                {
                    showModal && (
                        <div className="fixed overflow-scroll z-50 top-0 left-0 w-full h-full bg-black/40
                        flex justify-center items-center  routes-container"
                        >


                            <div className="h-[90%] w-auto  rounded-md overflow-scroll relative ">
                                <div className="flex flex-col  justify-center h-[90%] w-[90%] py-6 px-4  pb-6   ">

                                    <span
                                        onClick={() => {
                                            setshowModal(false)
                                        }}
                                        className="text-[20px] modal-close-icon cursor-pointer"
                                    >
                                        &times;
                                    </span>


                                    <img className=" bg-contain h-[100%]" src={preview.url} alt='' />

                                    <div className="w-full mt-8  mb-8 justify-center flex  ">
                                        <label
                                            className="min-w[20px] pointer bg-softpasspurple-300 px-6 py-1 rounded-md text-white"
                                        >

                                            <p className="text-[13px]">Upload</p>

                                            <input
                                                onChange={(e: any) => handleReUpload(e.target.files[0])}
                                                
                                                className="hidden"
                                                type="file"
                                                id='preview-upload'
                                                accept="image/png, image/jpg,  image/jpeg"
                                            />
                                        </label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>



        </AppWrapper>



    );
};

export default Compliance;
