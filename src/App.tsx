import { useState } from "react";
import { Helmet } from "react-helmet";
import "./assets/styles/main.scss";
import AppLoader from "./components/AppComponent/AppLoader";
import { PopUp } from "./components/widget/PopUp";
import { AppProvider } from "./contextProvide/AppContext";
import { AuthProvider } from "./contextProvide/AuthContext";
import RootRoutes from "./navigation";





function App() {
  const [isUserLogin, setisUserLogin] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  return (
    <AuthProvider.Provider value={{ isUserLogin, setisUserLogin }}>
      <AppProvider.Provider value={{ isLoading, setisLoading }}>


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
