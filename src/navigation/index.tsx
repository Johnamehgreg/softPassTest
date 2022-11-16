import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import {
  BrowserRouter, Navigate, Route,
  Routes
} from "react-router-dom";
import { AuthProvider } from '../contextProvide/AuthContext';
import route from './router';


const RootRoutes = () => {

  const {isUserLogin, setisUserLogin} = useContext(AuthProvider)

  const mainRoute = route.filter((item: any) => item.stack === 'app')
  const landingRoute = route.filter((item: any) => item.stack !== 'app')
  const user = Cookies.get('isLogin')

  const readCookies = () => {
    
    if(user){
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
              {
                mainRoute.map((item: any) => {
                  const { Page, route } = item

                  return (
                    <Route path={route} key={route} element={<Page />} />
                  )

                })
              }
            </>
          )
        }

        <Route path='*' element={<Navigate to={isUserLogin ? '/' : '/landing'} />} />


      </Routes>
    </BrowserRouter>
  )
}

export default RootRoutes