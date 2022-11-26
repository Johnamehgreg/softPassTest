import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import SelectIdDropdown from "../../components/dashboard/widget/SelectIdDropdown";
import DashboardTemplate from "../../layouts/Dashboard/DashboardTemplate";


interface Props { }

function HomePage(props: Props) {
  const { } = props;
  const ref = useRef(null);
  const [headerTitle, setHeaderTitle] = useState("");
  const [fromUniqueInput, setFormUniqueInput] = useState([]);
  const onChange = (val: string, array: any) => {
    setHeaderTitle(val);
    setFormUniqueInput(array);
  };





  return (
    <DashboardTemplate welcomeNote={"Goodday Micheal "} title={'Trust you are having a great day 😄'}>
      {/* start of select id */}
      <div className="max-w-[200px]">
        <SelectIdDropdown onChange={onChange} dropdownDirection="right" />
      </div>
      {/* end of select id */}
      <Outlet />
    </DashboardTemplate>
  );
}

export default HomePage;
