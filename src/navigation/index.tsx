import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import {
  BrowserRouter, Navigate, Route,
  Routes
} from "react-router-dom";
import { dashboardSideRoute, verificationRoute } from '../components/dashboard/dashboardSideRoute';
import { AuthProvider } from '../contextProvide/AuthContext';
import route from './router';

const RootRoutes = () => {

  const { isUserLogin, setisUserLogin } = useContext(AuthProvider)

  const MainRoute = route.filter((item: any) => item.stack === 'app')[0]
  const landingRoute = route.filter((item: any) => item.stack !== 'app')
  const user = Cookies.get('isLogin')

  const withoutVerification = dashboardSideRoute.filter((item:any) => item.name !== 'verification' )
  // const Verification = dashboardSideRoute.filter((item:any) => item.name === 'verification' )[0]

  


  const readCookies = () => {

    if (user) {
      setisUserLogin(true)
    }
  }
  useEffect(() => {
    readCookies()
  }, [user])


  return (
    <BrowserRouter>
      <Routes>



        {
          !isUserLogin && (
            <>
              {
                landingRoute.map((item: any) => {
                  const { Page, route } = item

                  return (
                    <Route path={route} key={route} element={<Page />} />
                  )

                })
              }
            </>
          )
        }
        {
          isUserLogin && (
            <>



              <Route path={MainRoute.route} element={<MainRoute.Page />} >
                {
                  withoutVerification.map((item:any) => {
                    const { Page, route } = item

                    return (
                      <Route path={route} key={route} element={<Page />} />
                    )
                    
                  })
                }
                {
                  verificationRoute.map((item:any) => {
                    const { Page, route } = item

                    return (
                      <Route path={route} key={route} element={<Page />} />
                    )
                    
                  })
                }
                
              </Route>



            </>
          )
        }

        <Route path='*' element={<Navigate to={isUserLogin ? '/dashboard' : '/landing'} />} />


      </Routes>
    </BrowserRouter>
  )
}

export default RootRoutes