import { useRef, useState } from "react";
import DashboardTemplate from "../../layouts/Dashboard/DashboardTemplate";
import Verification from "./pages/Verification";
import FacialVerification from "../home/pages/FacialVerification"
import Wallet from "./pages/Wallet.tsx"

import Dashboard from "./pages/Dashboard";

interface Props { }

function HomePage(props: Props) {
  const { } = props;
  const ref = useRef(null);

  //Variables
  const [selectId, setSelectId] = useState(false);
  const [dbSelectId, setDbSelectId] = useState(-1);
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
    {
      name: "Number of Total calls",
      title: "This month",
      amount: "23",
      type: "regular",
    },
    {
      name: "Total Wallet Balance",
      amount: "N 40,000.00",
      type: "wallet",
    },
  ]);

  const [amount, setAmount] = useState([
    { name: "Last 1 week" },
    { name: "Last 2 weeks" },
    { name: "Last 3 weeks" },
    { name: "Last one month" },
  ]);

  const [selectContent, setselectContent] = useState([
    { name: "BVN" },
    { name: "NIN" },
    { name: "Drivers’ License" },
    { name: "Nigerian International Passport" },
    { name: "PVC" },
    { name: "Phone number verification" },
    { name: "Advanced Phone number verification" },
    { name: "OCR" },
    { name: "Facial Comparison" },
  ]);

  //FUNCTION
  const closeDropDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget == event.target) setSelectId(false);
  };


  return (
    <DashboardTemplate welcomeNote={"Goodday Micheal "} title={'Trust you are having a great day 😄'}>
     {/* <Dashboard /> */}
     {/* <Verification /> */}
      {/* <FacialVerification/> */}
      <Wallet/>

    </DashboardTemplate>
  );
}

export default HomePage;
