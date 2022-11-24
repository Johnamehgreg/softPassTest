import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import CopyIcon from "../../../../components/svg-icons/CopyIcon";
import CardContainer from "./components/card";
import CreateContainers from "./modals/CreateContainersModal";
import DeactivateContainers from "./modals/DeactivateContainerModal";
import EditContainers from "./modals/EditContainerModal";

const ContainerPage = () => {
  const [tab, settab] = useState(1);

 //VARIABLE
 const [isCreateContOpen, setIsCreateContOpen] = useState(false)
 const [isEditContOpen, setIsEditContOpen] = useState(false)
 const [isDeactivateContOpen, setIsDeactivateContOpen] = useState(false)

 //FUNCTION
 const closeCreateContainerModal = (val: boolean)=>{
    setIsCreateContOpen(val)
}
const closeEditContainerModal = (val: boolean)=>{
    setIsEditContOpen(val)
}
const closeDeactivateContainerModal = (val: boolean)=>{
    setIsDeactivateContOpen(val)
}


  return (
    <section className="bg-white mt-8 garrif">
      <div className="flex items-center px-3 md:px-5 py-4 bg-softpassgray-50 lg:bg-transparent border-b-[1px] border-b-gray-300">
        <div className="container-page-tab w-6/12 ">
          <button
            onClick={() => {
              settab(1);
            }}
            className={
              tab === 1 ? "cont-tab-page cont-active-tab" : "cont-tab-page"
            }
          >
            Activate container
          </button>
          <button
            onClick={() => {
              settab(2);
            }}
            className={
              tab === 2 ? "cont-tab-page cont-active-tab" : "cont-tab-page"
            }
          >
            Disactive container
          </button>
        </div>
        <div className="w-6/12">
          <div className="flex justify-end z-10">
            <b 
           onClick={()=>{closeCreateContainerModal(true)}}
            className="border-[12px] cursor-pointer border-gray-100 px-3 text-[15px] py-1 text-softpasspurple-300">
              Create Container
            </b>
          </div>
        </div>
      </div>

      <div className="px-2 mt-3 pb-6">
        <CardContainer>
          <>
            <div className="flex justify-between w-full py-3">
              <h2>SoftPass</h2>

              <div className=" flex ">
                <p>edit</p>
                <p>remove</p>
              </div>
            </div>

            <div className="flex w-full items-center flex-wrap mt-8">
              {list.map((item: any) => {
                return (
                  <div className="item-key my-2">
                    <p>{item.name}</p>
                  </div>
                );
              })}
              <div className="item-key w-9 h-7">
                <AiOutlinePlus />
              </div>
            </div>

            <div className="flex w-full ">
              <div className="pt-5 text-gray-400 leading-3 w-full">
                <p className="text-[13px]">Container key</p>
                <div className="flex items-center flex-wrap text-[13px] w-full pb-3">
                  <div className="sm:w-6/12 w-full flex items-center">
                    649927a9-9816-4682-8a6b-b4f1e9eb2b15&nbsp;{" "}
                    <CopyIcon width={"18"} color={"black"} />
                  </div>
                  <div className="sm:w-6/12 w-full flex flex-wrap items-center">
                    <span className="text-softpasspurple-300 font-semibold mr-4">
                      Deactivate container
                    </span>
                    <span>04/08/2022</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        </CardContainer>
        
        <CardContainer>
          <>
            <div className="flex w-full ">
              <div className="pt-5 text-gray-400 leading-3 w-full">
                <div className="flex items-center flex-wrap text-[13px] w-full pb-3">
                  <div className="sm:w-6/12 w-full text-[18px] text-black flex items-center">
                    Product manager
                  </div>
                  <div className="sm:w-6/12 w-full pt-5 sm:pt-0 flex flex-wrap sm:flex-nowrap items-center">
                    <div className="w-full flex-wrap flex items-center pb-4 sm:pt-0">
                      <p className="text-[13px] w-full pb-2">Container key</p>
                      649927a9-9816-4682-8a6b-b4f1e9eb2b15
                    </div>
                    <button className="w-10 mx-2">
                    <CopyIcon width={"18"} color={"black"} />
                  </button>
                  <button 
                   onClick={()=>{closeEditContainerModal(true)}}
                  className="w-10 mx-2">
                    <CopyIcon width={"18"} color={"black"} />
                  </button>
                  <button 
                   onClick={()=>{closeDeactivateContainerModal(true)}}
                  className="w-8 h-7 flex justify-center items-center rounded-md bg-gray-200">
                  <AiOutlinePlus fill="black"/>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </CardContainer>

        <CardContainer>
          <>
            <div className="flex w-full ">
              <div className="pt-5 text-gray-400 leading-3 w-full">
                <div className="flex items-center flex-wrap text-[13px] w-full pb-3">
                  <div className="sm:w-6/12 w-full text-[18px] text-black flex items-center">
                    Developers
                  </div>
                  <div className="sm:w-6/12 w-full pt-5 sm:pt-0 flex flex-wrap sm:flex-nowrap items-center">
                    <div className="w-full flex-wrap flex items-center sm:pb-0 pb-4">
                      <p className="text-[13px] w-full pb-2">Container key</p>
                      649927a9-9816-4682-8a6b-b4f1e9eb2b15
                    </div>
                    <button className="w-10 mx-2">
                    <CopyIcon width={"18"} color={"black"} />
                  </button>
                  <button
                  onClick={()=>{closeEditContainerModal(true)}}
                  className="w-10 mx-2">
                    <CopyIcon width={"18"} color={"black"} />
                  </button>
                  <button 
                  onClick={()=>{closeDeactivateContainerModal(true)}}
                  className="w-8 h-7 flex justify-center items-center rounded-md bg-gray-200">
                  <AiOutlinePlus fill="black"/>
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        </CardContainer>
      </div>

      <CreateContainers isOpen={isCreateContOpen} closeModal={closeCreateContainerModal}/>
      <EditContainers isOpen={isEditContOpen} closeModal={closeEditContainerModal}/>
      <DeactivateContainers isOpen={isDeactivateContOpen} closeModal={closeDeactivateContainerModal}/>
    </section>
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
