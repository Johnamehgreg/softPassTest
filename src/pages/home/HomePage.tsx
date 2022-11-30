import { Outlet } from "react-router-dom";
import DashboardTemplate from "../../layouts/Dashboard/DashboardTemplate";


interface Props { }

function HomePage(props: Props) {
  const { } = props;

 


  return (
    <DashboardTemplate welcomeNote={"Goodday Micheal "} title={'Trust you are having a great day 😄'}>
      
      <Outlet />
    </DashboardTemplate>
  );
}

export default HomePage;
