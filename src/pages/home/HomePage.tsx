import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
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
      
      <Outlet />
    </DashboardTemplate>
  );
}

export default HomePage;
