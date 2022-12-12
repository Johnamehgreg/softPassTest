import Dashboard from "./pages/Dashboard/Dashboard"
import Verification from "./pages/Verification"
import routes from './routes'


const route = [
  {
    Page: Dashboard,
    route: routes.dashboard
  },
  {
    Page: Verification,
    route: routes.verification.map((item:any) => item.pages ),
    
  },

]


export default route