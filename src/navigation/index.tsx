import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import {
  BrowserRouter, Navigate, Route,
  Routes
} from "react-router-dom";
import { AuthProvider } from '../contextProvide/AuthContext';
import Dashboard from '../pages/home/pages/Dashboard';
import FacialVerification from '../pages/home/pages/FacialVerification';
import Verification from '../pages/home/pages/Verification';
import Wallet from '../pages/home/pages/Wallet.tsx/index';
import route from './router';

const RootRoutes = () => {

  const { isUserLogin, setisUserLogin } = useContext(AuthProvider)

  const MainRoute = route.filter((item: any) => item.stack === 'app')[0]
  const landingRoute = route.filter((item: any) => item.stack !== 'app')
  const user = Cookies.get('isLogin')





  const readCookies = () => {

    // if (user) {
      setisUserLogin(true)
    // }
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
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/auth-verification' element={<Verification />} />
                <Route path='/facial-verification' element={<FacialVerification />} />
                <Route path='/wallet' element={<Wallet />} />
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