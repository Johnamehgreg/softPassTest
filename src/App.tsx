import { useState } from "react";
import { Helmet } from "react-helmet";
import "./assets/styles/main.scss";
import { PopUp } from "./components/widget/PopUp";
import { AuthProvider } from "./contextProvide/AuthContext";
import RootRoutes from "./navigation";





function App() {
  const [isUserLogin, setisUserLogin] = useState(false)
  return (
    <AuthProvider.Provider value={{ isUserLogin, setisUserLogin }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Softpass</title>
      </Helmet>
      <PopUp />
      <RootRoutes />
    </AuthProvider.Provider>
    // <Edictor />
  );
}

export default App;
