import { useContext, useEffect, useState } from "react";
import AppRetching from "../../../../components/AppComponent/AppRetching";
import AppWrapper from "../../../../components/AppWrapper";
import { AppProvider } from "../../../../contextProvide/AppContext";
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


      console.log(data?.data, '@container data')
    }
  }


  useEffect(() => {
    checkSuccess()
  }, [data])


  const onRefetch = () => {
    refetch()
    seterrorText('Retrying...')
  }


  const { settopNavData } = useContext(AppProvider)


  useEffect(() => {
    settopNavData({
      title: 'Container',
      message: 'Manage your team member activities as well as transaction history',
    })
  }, [])




  return (
    <AppWrapper
      errorText={errorText}
      onRefetch={() => onRefetch()}
      isSuccess={isSuccess}
      isError={isError}

    >
      <section className="bg-white rounded-[10px] mt-8 garrif">
        <div className="flex bg-white items-center px-3 md:px-5 py-4 border-b-[1px] border-b-gray-300">
          <div className="container-page-tab pl-4 w-6/12 ">
            <button
              onClick={() => {
                settab(1);
                setstatus(true)
              }}
              className={
                tab === 1 ? "cont-tab-page cont-active-tab " : "cont-tab-page  text-gray-400"
              }
            >
              Activate container
            </button>
            <button
              onClick={() => {
                settab(2);
                setstatus(false)

              }}
              className={
                tab === 2 ? "cont-tab-page cont-active-tab" : "cont-tab-page text-gray-400"
              }
            >
              Disactived container
            </button>
          </div>
          <div className="w-6/12 flex justify-end">
            <button
              onClick={() => setIsCreateContOpen(true)}
              className="text-softpasspurple-300 border-[8px] py-1 px-2 border-gray-100 text-[10px] rounded-sm md:text-[15px]  " >
              Create Container
            </button>

          </div>
        </div>

        <div className="px-4 md:px-4 lg:px-10 mt-3 pb-6">

          <AppRetching isFetching={isFetching} />


          {
            containerList
              .map((item: any, index: any) => {
                return (
                  <ContainerItem refetch={refetch} item={item} />
                )
              })
          }


          {
            isFetched && isDataSuccess && containerList.length === 0 && (
              <div className="flex flex-col items-center h-[100px] justify-center">
                <p className="text-center text-gray-400 text-sm">
                You currently have no {tab === 1 ? 'activate' : 'deactivated'} container. 
                </p>
              </div>
            )
          }


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
