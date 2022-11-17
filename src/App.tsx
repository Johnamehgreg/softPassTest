import { useState } from "react";
import "./assets/styles/main.scss";
import { PopUp } from "./components/widget/PopUp";
import { AuthProvider } from "./contextProvide/AuthContext";
import RootRoutes from "./navigation";




function App() {
  const [isUserLogin, setisUserLogin] = useState(false)
  return (
    <AuthProvider.Provider value={{ isUserLogin, setisUserLogin }}>
      <PopUp />
      <RootRoutes />
    </AuthProvider.Provider>
    // <Edictor />
  );
}

export default App;
