import React, { useEffect, useState } from "react";
import AppWrapper from "../../../../components/AppWrapper";
import HomeInput from "../../../../components/input/homeInput";
import { useComplianceEvent, useHandleComplianceUpdate } from "./compliance-hook";
import TopCard from "./components/TopCard";
import UploadInout from "./components/uplaodInput";
// import HomeEdictor from "../components/Edictor";
import ReactS3Client from 'react-aws-s3-typescript';

interface Props { }


const Compliance: React.FC = (props: Props) => {
    const { } = props;




    //VARIABLES

    const [errorText, seterrorText] = useState('Retry')
    const [isSuccess, setisSuccess] = useState(false)
    const [isError, setisError] = useState(false)
    const [complincesInputData, setcomplincesInputData] = useState({
        tax_id: '',
        team_size: '',
        organization_name: '',
        director_name: '',
        director_email: '',
        director_phone: '',
        bvn: '',
        cac_form:null
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


    const { update } = useHandleComplianceUpdate(refetch)



    const onRefetch = () => {
        refetch()
        seterrorText('Retrying...')
    }

    //FUNCTION


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

    const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let data = {
            "tax_id": complincesInputData.tax_id,
            "director_name": complincesInputData.director_name,
            "director_email": complincesInputData.director_email,
            "director_phone": complincesInputData.director_phone,
            "bvn": complincesInputData.bvn,
            "team_size": complincesInputData.team_size,
        }

        const s3Config = {
            bucketName: 'soft-bucket',
            region: 'us-east-1',
            accessKeyId: 'AKIAV7PVZCUWZJM6YAFN',
            secretAccessKey: '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',
        }


        const s3 = new ReactS3Client(s3Config);
        let fileInput:any = complincesInputData.cac_form;
        let formdata: any = new FormData();
        // formdata.append("upload", fileInput.files[0], "user-profile-picture.jpg");
        // formdata.append("type", "profilePicture");

        const filename = 'filename-to-be-uploaded'; 

       let  file = formdata


       s3.uploadFile(file, filename)
        .then((res:any) => {
            console.log(res.response, 'aws response error');
        })
        .catch((err:any) => {
            console.log(err.response, 'aws response error');
        })

        // update(data)
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
                    onSubmit={onSubmit}
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

                                <UploadInout
                                placeholder='Upload CAC form'
                                onChange={(e) => setcomplincesInputData({ ...complincesInputData, cac_form: e })}
                                />
                                <UploadInout
                                placeholder='Upload Certification of Incorporation'
                                onChange={(e) => setcomplincesInputData({ ...complincesInputData, cac_form: e })}
                                />
                                <UploadInout
                                placeholder='Upload Proof of Address'
                                onChange={(e) => setcomplincesInputData({ ...complincesInputData, cac_form: e })}
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
