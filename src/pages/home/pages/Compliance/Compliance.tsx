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
    const { setisLoading } = useContext(AppProvider)
    const [complincesInputData, setcomplincesInputData] = useState<any>({
        tax_id: '',
        team_size: '',
        organization_name: '',
        director_name: '',
        director_email: '',
        director_phone: '',
        bvn: '',

    })

    const [isCC_Form, setisCC_Form] = useState<any>({
        isSelected: false,
        isUploaded: false,
        url: '',
        file: ''
    })
    const [isUCP_Form, setisUCP_Form] = useState<any>({
        isSelected: false,
        isUploaded: false,
        url: '',
        file: ''
    })
    const [isUPA_Form, setisUPA_Form] = useState<any>({
        isSelected: false,
        isUploaded: false,
        url: '',
        file: ''
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
        isFetching,
        refetch
    } = useComplianceEvent({ onError, })


    const { update, uploadImage } = useHandleComplianceUpdate(refetch)



    const onRefetch = () => {
        refetch()
        seterrorText('Retrying...')
    }






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


            })
            //   setcontainerList(data?.data)


            console.log(data?.data, '@complinces data')
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
                    setisCC_Form({ ...isCC_Form, url: res.data.secure_url, isUploaded: true })
                    setTimeout(() => {
                        onUpdate({ cac: res.data.secure_url })
                    }, 200);


                })
                .catch((err) => {
                    console.error(err, 'response upload')
                })

        }
        if (isUCP_Form.isSelected === true) {

            data.append("file", isUCP_Form.file);

            axios.post(url, data)
                .then((res: any) => {
                    setisUCP_Form({ ...isUCP_Form, url: res.data.secure_url, isUploaded: true })
                    console.log(res.data.secure_url, 'response upload')
                })
                .catch((err) => {

                })

        }
        if (isUPA_Form.isSelected === true) {

            data.append("file", isUPA_Form.file);

            axios.post(url, data)
                .then((res: any) => {
                    setisUPA_Form({ ...isUPA_Form, url: res.data.secure_url, isUploaded: true })

                })
                .catch((err) => {

                })

        }


    }


    const onUpdate = (type: { cac?: string }) => {
        const { cac } = type
        let data: any = {
            "tax_id": complincesInputData.tax_id,
            "director_name": complincesInputData.director_name,
            "director_email": complincesInputData.director_email,
            "director_phone": complincesInputData.director_phone,
            "bvn": complincesInputData.bvn,
            "team_size": complincesInputData.team_size,

        }


        if (isCC_Form.isSelected === true) {
            let cac_form = cac
            data.cac_form = cac_form
        }

        console.log(data, 'Available Form')

         setisLoading(false)




        update(data)
    }


    useEffect(() => {
        checkSuccess()
    }, [data])

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
                                    value={complincesInputData.bvn}
                                    placeholder="Company registration number"
                                    onChange={(e) => {
                                        setcomplincesInputData({ ...complincesInputData, bvn: e.target.value })
                                    }}

                                />

                                {/* {
                                    uploadItem.map((item: any) => {
                                        return (
                                            <UploadInout
                                                placeholder={item.placehoalder}
                                                type={item.type}
                                                onFileSelect={(e, type) => {
                                                    onFileSelected(e, type)
                                                    // alert('1')
                                                    // setisCC_Form({ ...isCC_Form, isSelected: true, file: e })
                                                }}
                                            />
                                        )
                                    })
                                } */}
                                <UploadInout
                                    type="CAC"
                                    fileName={isCC_Form.file?.name}
                                    placeholder='Upload CAC form'
                                    onFileSelect={(e) => {
                                        // alert('1')
                                        setisCC_Form({ ...isCC_Form, isSelected: true, file: e })
                                    }}
                                />

                                <UploadInout
                                    type="UCI"
                                    fileName={isUCP_Form.file?.name}
                                    placeholder='Upload Certification of Incorporation'
                                    onFileSelect={(e) => {
                                        setisUCP_Form({ ...isUCP_Form, isSelected: true, file: e })
                                    }}
                                />




                                <UploadInout
                                    type="UPA"
                                    fileName={isUPA_Form?.file?.name}
                                    placeholder='Upload Proof of Address'
                                    onFileSelect={(e) => {
                                        setisUPA_Form({ ...isUPA_Form, isSelected: true, file: e })
                                    }}
                                />








                                <div className="w-full mt-8  mb-8 justify-end flex  ">
                                    <button type="submit" className="min-w[20px] bg-softpasspurple-300 px-6 py-1 rounded-md text-white">Save</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>
            </>

        </AppWrapper>
    );
};

export default Compliance;
