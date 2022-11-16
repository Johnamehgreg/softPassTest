import { useState } from "react";
import "./assets/styles/main.scss";
import { AuthProvider } from "./contextProvide/AuthContext";
import RootRoutes from "./navigation";




function App() {
  const [isUserLogin, setisUserLogin] = useState(false)
  return (
    <AuthProvider.Provider value={{ isUserLogin, setisUserLogin }}>
      <RootRoutes />
    </AuthProvider.Provider>
    // <Edictor />
  );
}

export default App;
