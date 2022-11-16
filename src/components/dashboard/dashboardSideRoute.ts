import { ReactComponent as DDashboard } from "../../assets/image/svg/dashboard.svg"
import { ReactComponent as DVerification } from "../../assets/image/svg/chart-success.svg"
import { ReactComponent as DContainer } from "../../assets/image/svg/container.svg"
import { ReactComponent as DWallet } from "../../assets/image/svg/empty-wallet.svg"
import { ReactComponent as DReport } from "../../assets/image/svg/report.svg"
import { ReactComponent as DCompliance } from "../../assets/image/svg/compliance.svg"
import { ReactComponent as DTeam } from "../../assets/image/svg/team.svg"
import { ReactComponent as DAuditLog } from "../../assets/image/svg/audit.svg"
import { ReactComponent as DProfileSettings } from "../../assets/image/svg/settings.svg"

export const dashboardSideRoute = [
    {
       route: '/dashboard',
       name: 'Dashboard',
       subRoute: [] ,
       Icon: DDashboard
    },
    {
        route: '/verification',
        name: 'verification',
        subRoute: [{
         subname:'Identity verification',
         route:''
        },
        {
         subname:'Customer Identification',
         route:''
        },
        {
         subname:'Facial verification',
         route:''
        },
        {
         subname:'Business Verification',
        },
        {
         subname:'Anti-Money Laundering (AML)',
         route:''
        }
      ] ,
        Icon: DVerification
     },
     {
        route: '/container',
        name: 'Container',
        subRoute: [] ,
        Icon: DContainer
     },
     {
        route: '/wallet',
        name: 'wallet',
        subRoute: [] ,
        Icon: DWallet
     },
     {
        route: '/report',
        name: 'report',
        subRoute: [] ,
        Icon: DReport
     },
     {
        route: '/compliance',
        name: 'compliance',
        subRoute: [] ,
        Icon: DCompliance
     },
     {
        route: '/team',
        name: 'team',
        subRoute: [] ,
        Icon: DTeam
     },
     {
        route: '/audit-Logs',
        name: 'audit Logs',
        subRoute: [] ,
        Icon: DAuditLog
     },
     {
        route: '/profile-settings',
        name: 'profile settings',
        subRoute: [] ,
        Icon: DProfileSettings
     },
]