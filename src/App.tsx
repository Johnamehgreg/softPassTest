import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useUserDetails } from "./app-query-hook/use-user-query-hook";
import "./assets/styles/main.scss";
import AppLoader from "./components/AppComponent/AppLoader";
import { PopUp } from "./components/widget/PopUp";
import { AppProvider } from "./contextProvide/AppContext";
import { AuthProvider } from "./contextProvide/AuthContext";
import RootRoutes from "./navigation";





function App() {
  const [isUserLogin, setisUserLogin] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [userDetail, setuserDetail] = useState({})

  const [topNavData, settopNavData] = useState({
    title:'Goodday Micheal',
    message:'Trust you are having a great day 😄',
  })



  const { data, isFetched, isSuccess } = useUserDetails()

  const checkSuccess = () => {
    if (isSuccess && isFetched) {
      setuserDetail(data?.data)
    }
  }

  useEffect(() => {
    checkSuccess()
  }, [data])

  


  let appValue = {
    isLoading,
    userDetail,
    setisLoading,
    topNavData,
    settopNavData,
  }

  return (
    <AuthProvider.Provider value={{ isUserLogin, setisUserLogin }}>
      <AppProvider.Provider value={appValue}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Softpass</title>
        </Helmet>
        <PopUp />
        <AppLoader isLoading={isLoading} />
        <RootRoutes />
      </AppProvider.Provider>
    </AuthProvider.Provider>
    // <Edictor />
  );
}

export default App;
