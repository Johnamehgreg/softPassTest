import { useState } from "react";
import AddTeamModal from "./components/AddTeamModal";
import TeamTable from "./components/TeamTable";


interface Props { }

function Team(props: Props) {
    const { } = props;

    const [tabs, setTabs] = useState([
        {
            name: "Number of Total calls",
            title: "This month",
            amount: "23",
            type: "regular",
        },
        {
            name: "Number of Total calls",
            title: "This month",
            amount: "23",
            type: "regular",
        },
    ]);

    const [isOpen, setisOpen] = useState(false)

    return (
        <>
            {/* <TopCardContainerTeam tabs={tabs} /> */}
            <section className="bg-white mt-8 garrif">
                <div className="flex items-center px-3 md:px-5 py-4 bg-softpassgray-50 lg:bg-transparent border-b-[1px] border-b-gray-300">
                    <h1 className="w-6/12 text-[20px] font-semibold">Team Members</h1>
                    <div className="w-6/12">
                        <div className="flex  justify-end z-10">
                            <div className="border-[12px] border-gray-100">
                                <button
                                    onClick={() => setisOpen(true)}
                                    className="bg-softpasspurple-300 rounded-md text-sm px-2 py-2 text-white">
                                    Add Team Member
                                </button>
                            </div>
                            {/* <b className="border-[12px] border-gray-100 px-3 text-[15px] py-1 text-softpasspurple-300">
              Generate Report
              </b> */}
                        </div>
                    </div>
                </div>

                <TeamTable />

                <AddTeamModal isOpen={isOpen} closeModal={() => setisOpen(false)} />


            </section>
        </>
    );
}

export default Team;
