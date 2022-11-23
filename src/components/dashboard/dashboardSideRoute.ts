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
import Dashboard from "../../pages/home/pages/Dashboard"
import Team from "../../pages/home/pages/Team/Team"
import Verification from "../../pages/home/pages/Verification"
import Wallet from "../../pages/home/pages/Wallet.tsx/Wallet'"

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
               route: '/identity-verification',
               name: 'Bulk BNV',
            },
            {
               route: '/identity-verification',
               name: 'NIN',
            },
            {
               route: '/identity-verification',
               name: 'BVN with image',
            },
            {
               route: '/identity-verification',
               name: 'BNV wihout image',
            },
            {
               route: '/identity-verification',
               name: 'Bluk BNV with/without image',
            },
            {
               route: '/identity-verification',
               name: 'Driver’s License',
            },
            {
               route: '/identity-verification',
               name: 'voters Card',

            },
            {
               route: '/identity-verification',
               name: 'Nigerian International PassPort',

            },
            {
               route: '/identity-verification',
               name: 'Permanent voters Card (PVC)',

            },


         ]
      },
      {
         subname: 'Customer Identification',
         route: '',
         subRoute: [
            {
               route: '/identity-verification',
               name: 'Phone number verification',
               Page:Verification
            },
            {
               route: '/identity-verification',
               name: 'Phone number verification (Bulk)',
               Page:Verification
            },
            {
               route: '/identity-verification',
               name: 'Bank Account Verification (NUBAN)',
               Page:Verification
            },
            {
               route: '/identity-verification',
               name: 'Age Verification',
               Page:Verification
            },
            {
               route: '/identity-verification',
               name: 'Bulk BNV with/without image',
               Page:Verification
            },
         ]
      },
      {
         subname: 'Facial verification',
         route: '/facial-verification',
         subRoute: [
            {
               route: '/identity-verification',
               name: 'OCR',
               Page:Verification
            },
            {
               route: '/identity-verification',
               name: 'Facial Comparison',
               Page:Verification
            },

         ]
      },
      {
         subname: 'Business Verification',
         subRoute: [
            {
               route: '/identity-verification',
               name: 'CAC Basic ',
               Page:Verification
            },


            {
               route: '/identity-verification',
               name: 'CAC Advanced Verification',
               Page:Verification
            },
            {
               route: '/identity-verification',
               name: 'Bulk BNV with/without image',
               Page:Verification
            },
         ]
      },
      {
         subname: 'Anti-Money Laundering (AML)',
         route: ''
      }
      ],
      Icon: DVerification
   },
   {
      route: '/container',
      name: 'Container',
      subRoute: [],
      Icon: DContainer,
      Page:Wallet
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