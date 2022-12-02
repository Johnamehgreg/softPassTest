import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useUserDetails } from "../../app-query-hook/use-user-query-hook";
import { AppProvider } from "../../contextProvide/AppContext";
import DashboardTemplate from "../../layouts/Dashboard/DashboardTemplate";


interface Props { }

function HomePage(props: Props) {
  const { } = props;

  const {setuserDetail} = useContext(AppProvider)


  const { data, isFetched, isSuccess } = useUserDetails()

  const checkSuccess = () => {
    if (isSuccess && isFetched) {
      setuserDetail(data?.data)
    }
  }


  useEffect(() => {
    checkSuccess()
  }, [data])



 


  return (
    <DashboardTemplate welcomeNote={"Goodday Micheal "} title={'Trust you are having a great day 😄'}>
      
      <Outlet />
    </DashboardTemplate>
  );
}

export default HomePage;
