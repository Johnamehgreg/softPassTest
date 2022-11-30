import { useEffect, useState } from "react";
import AppRetching from "../../../../components/AppComponent/AppRetching";
import AppWrapper from "../../../../components/AppWrapper";
import ContainerItem from "./components/containerItem";
import { useContainerHook } from "./modals/container-query-hook";
import CreateContainers from "./modals/CreateContainersModal";
const ContainerPage = () => {
  const [tab, settab] = useState(1);

  //VARIABLE
  const [isCreateContOpen, setIsCreateContOpen] = useState(false)
  const [isEditContOpen, setIsEditContOpen] = useState(false)
  const [isDeactivateContOpen, setIsDeactivateContOpen] = useState(false)
  const [isSuccess, setisSuccess] = useState(false)
  const [isError, setisError] = useState(false)
  const [containerList, setcontainerList] = useState<any>([])
  const [errorText, seterrorText] = useState('Retry')
  //FUNCTION
  const closeCreateContainerModal = (val: boolean) => {
    setIsCreateContOpen(val)
  }

  const [status, setstatus] = useState(true)



  const onError = () => {
    setisError(true)
    setisSuccess(false)
    seterrorText('Retry')

  }

  const {
    data,
    isFetched,
    isError: isErrorData,
    isSuccess: isDataSuccess,
    isFetching,
    refetch
  } = useContainerHook({ onError, status })

  const checkSuccess = () => {

    if (isFetched && isDataSuccess) {
      setisError(false)
      setisSuccess(true)
      setcontainerList(data?.data)
      console.log(data?.data)
    }
  }


  useEffect(() => {
    checkSuccess()
  }, [data])


  const onRefetch = () => {
    refetch()
    seterrorText('Retrying...')
  }




  return (
    <AppWrapper
      errorText={errorText}
      onRefetch={() => onRefetch()}
      isSuccess={isSuccess}
      isError={isError}

    >
      <section className="bg-white mt-8 garrif">
        <div className="flex items-center px-3 md:px-5 py-4 bg-softpassgray-50 lg:bg-transparent border-b-[1px] border-b-gray-300">
          <div className="container-page-tab w-6/12 ">
            <button
              onClick={() => {
                settab(1);
                setstatus(true)
              }}
              className={
                tab === 1 ? "cont-tab-page cont-active-tab" : "cont-tab-page"
              }
            >
              Activated container
            </button>
            <button
              onClick={() => {
                settab(2);
                setstatus(false)

              }}
              className={
                tab === 2 ? "cont-tab-page cont-active-tab" : "cont-tab-page"
              }
            >
              Disactived container
            </button>
          </div>
          <div className="w-6/12">
            <div className="flex justify-end z-10">
              <b
                onClick={() => { closeCreateContainerModal(true) }}
                className="border-[12px] cursor-pointer border-gray-100 px-3 text-[15px] py-1 text-softpasspurple-300">
                Create Container
              </b>
            </div>
          </div>
        </div>

        <div className="px-2 mt-3 pb-6">

          <AppRetching isFetching={isFetching} />



        

          {
            containerList
              .map((item: any, index: any) => {
                return (
                  <ContainerItem refetch={refetch} item={item} />
                )
              })
          }



          
          {/* <CardContainer>
            <>
              <div  className="flex w-full ">
                <div className="pt-5 text-gray-400 leading-3 w-full">
                  <div className="flex items-center flex-wrap text-[13px] w-full pb-3">
                    <div className="sm:w-6/12 w-full text-[18px] text-black flex items-center">
                      fdbdkxnds
                    </div>
                    <div className="sm:w-6/12 w-full pt-5 sm:pt-0 flex flex-wrap sm:flex-nowrap items-center">
                      <div className="w-full flex-wrap flex items-center sm:pb-0 pb-4">
                        <p className="text-[13px] w-full pb-2">Container key</p>
                        csjnkncksxzn
                      </div>
                      <button className="w-10 mx-2">
                        <CopyIcon width={"18"} color={"black"} />
                      </button>
                      <button
                        className="w-10 mx-2">
                        <CopyIcon width={"18"} color={"black"} />
                      </button>
                      <button
                        className="w-8 h-7 flex justify-center items-center rounded-md bg-gray-200">
                        <AiOutlinePlus fill="black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </CardContainer> */}




        </div>

        <CreateContainers refetch={refetch} isOpen={isCreateContOpen} closeModal={closeCreateContainerModal} />
      </section>
    </AppWrapper>

  );
};

let list = [
  {
    name: "BVN",
  },
  {
    name: "NIN",
  },
  {
    name: "Driver Liciens",
  },
  {
    name: "Nigerian international Passport",
  },
  {
    name: "PVC",
  },
];

export default ContainerPage;
