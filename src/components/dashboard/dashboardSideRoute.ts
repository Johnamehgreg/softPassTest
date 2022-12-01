import { ReactComponent as DAuditLog } from "../../assets/image/svg/audit.svg"
import { ReactComponent as DVerification } from "../../assets/image/svg/chart-success.svg"
import { ReactComponent as DCompliance } from "../../assets/image/svg/compliance.svg"
import { ReactComponent as DContainer } from "../../assets/image/svg/container.svg"
import { ReactComponent as DDashboard } from "../../assets/image/svg/dashboard.svg"
import { ReactComponent as DWallet } from "../../assets/image/svg/empty-wallet.svg"
import { ReactComponent as DReport } from "../../assets/image/svg/report.svg"
import { ReactComponent as DProfileSettings } from "../../assets/image/svg/settings.svg"
import { ReactComponent as DTeam } from "../../assets/image/svg/team.svg"
import Compliance from "../../pages/home/pages/Compliance/Compliance"
import ContainerPage from "../../pages/home/pages/container/Container"
import Dashboard from "../../pages/home/pages/Dashboard"
import FacialVerification from "../../pages/home/pages/FacialVerification"
import Team from "../../pages/home/pages/Team/Team"
import Verification from "../../pages/home/pages/Verification"
import AMT from "../../pages/home/pages/verification/AMT"
import BAV from "../../pages/home/pages/verification/BAV"
import BulkBvn from "../../pages/home/pages/verification/BulkBvn"
import BvnWithImage from "../../pages/home/pages/verification/BvnWithImage"
import BvnWithoutWithImage from "../../pages/home/pages/verification/BvnWithout-WithImage"
import BvnWithoutImage from "../../pages/home/pages/verification/BvnWithoutImage"
import CACAdvanceVerification from "../../pages/home/pages/verification/CACAdvanceVerification"
import CACBasic from "../../pages/home/pages/verification/CACBasic"
import DriverLicense from "../../pages/home/pages/verification/DriverLicense"
import NIN from "../../pages/home/pages/verification/NIN"
import NIP from "../../pages/home/pages/verification/NIP"
import OCR from "../../pages/home/pages/verification/OCR"
import PNV from "../../pages/home/pages/verification/PNV"
import PNVBulk from "../../pages/home/pages/verification/PNVBulk"
import PVC from "../../pages/home/pages/verification/PVC"
import VotersCard from "../../pages/home/pages/verification/VotersCard"
import Wallet from "../../pages/home/pages/Wallet.tsx/Wallet"

export const dashboardSideRoute = [
   {
      route: '/dashboard',
      name: 'Dashboard',
      subRoute: [],
      Icon: DDashboard,
      Page: Dashboard,
   },
   {
      route: '/verification',
      name: 'verification',
      subRoute: [{
         
         subname: 'Identity verification',
         subRoute: [
            {
               route: '/bulk-bvn',
               name: 'Bulk BVN',
               Page:BulkBvn,
            },
            {
               route: '/NIN',
               name: 'NIN',
               Page:NIN
            },
            {
               route: '/bvn-with-image',
               name: 'BVN with image',
               Page:BvnWithImage
            },
            {
               route: '/bvn-without-image',
               name: 'BVN wihout image',
               Page: BvnWithoutImage
            },
            {
               route: '/bvn-with-without-image',
               name: 'Bulk BVN with/without image',
               Page:BvnWithoutWithImage
            },
            {
               route: '/driver-license',
               name: 'Driver’s License',
               Page:DriverLicense
            },
            {
               route: '/voters-card',
               name: 'Voters Card',
               Page:VotersCard

            },
            {
               route: '/nigerian-international-password',
               name: 'Nigerian International PassPort',
               Page:NIP

            },
            {
               route: '/permanent-voters-card',
               name: 'Permanent voters Card (PVC)',
               Page:PVC

            },


         ]
      },
      {
         subname: 'Customer Identification',
         subRoute: [
            {
               route: '/phone-number-verification',
               name: 'Phone number verification',
               Page:PNV
            },
            {
               route: '/phone-number-verification-bulk',
               name: 'Phone number verification (Bulk)',
               Page:PNVBulk
            },
            {
               route: '/bank-account-verification',
               name: 'Bank Account Verification (NUBAN)',
               Page:BAV
            },
            {
               route: '/age-verification',
               name: 'Age Verification',
               Page:Verification
            },
            
         ]
      },
      {
         subname: 'Facial verification',
         subRoute: [
            {
               route: '/ocr',
               name: 'OCR',
               Page:OCR
            },
            {
               route: '/facial-comparison',
               name: 'Facial Comparison',
               Page:FacialVerification
            },

         ]
      },
      {
         subname: 'Utilities',
         subRoute: [
            {
               route: '/ocr',
               name: 'Bill Payment',
               Page:OCR
            },
            {
               route: '/facial-comparison',
               name: 'Airtime',
               Page:FacialVerification
            },
            {
               route: '/facial-comparison',
               name: 'DATA',
               Page:FacialVerification
            },

         ]
      },
      {
         subname: 'Business Verification',
         subRoute: [
            {
               route: '/CAC-bacis',
               name: 'CAC Basic ',
               Page:CACBasic
            },


            {
               route: '/CAC-advanced-verification', 
               name: 'CAC Advanced Verification',
               Page:CACAdvanceVerification
            },
           
         ]
      },
      {
         subname: 'Anti-Money Laundering (AML)',
         route: '/anti-money-laundring',
         Page:AMT
      }
      ],
      Icon: DVerification
   },
   {
      route: '/container',
      name: 'Container',
      subRoute: [],
      Icon: DContainer,
      Page:ContainerPage
   },
   {
      route: '/wallet',
      name: 'wallet',
      subRoute: [],
      Icon: DWallet,
      Page:Wallet
   },
   {
      route: '/report',
      name: 'report',
      subRoute: [],
      Icon: DReport,
      Page:Wallet
   },
   {
      route: '/compliance',
      name: 'compliance',
      subRoute: [],
      Icon: DCompliance,
      Page:Compliance,
      
   },
   {
      route: '/team',
      name: 'team',
      subRoute: [],
      Icon: DTeam,
      Page:Team,
   },
   {
      route: '/audit-Logs',
      name: 'audit Logs',
      subRoute: [],
      Icon: DAuditLog,
      Page:Wallet
   },
   {
      route: '/profile-settings',
      name: 'profile settings',
      subRoute: [],
      Icon: DProfileSettings,
      Page:Wallet
   },
]


let list = dashboardSideRoute.filter((item: any) => item?.name === 'verification')[0]?.subRoute

let iList = list.map((item: any) => {
  return item.subRoute
})

let nList = iList.map((item:any) => {
  return item
})


export const verificationRoute = [...nList[0], ...nList[1], ...nList[2], ...nList[3], list[4] ]



