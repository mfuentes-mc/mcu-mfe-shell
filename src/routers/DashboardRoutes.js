import React, {Suspense, lazy} from 'react'
import { Routes, Route} from 'react-router-dom'
import HomeScreen from '../pages/home/components/HomeScreen'
import {Navbar} from '../components/navbar/Navbar'
import SafeComponent from '../components/error/SafeComponent';

const StoresRouters = lazy(()=> import('stores/StoresRouters'));

const UserRouters = lazy(() => import('users/UsersRouters'));

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div >

          <Routes>
              <Route path="/" element={<HomeScreen/>}/>
              <Route path="home" element={<HomeScreen/>}/>
              <Route path="users/*" element={
                <SafeComponent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <UserRouters/>
                  </Suspense>
                </SafeComponent>
              }/>
              <Route path="stores/*" element={
                <SafeComponent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <StoresRouters/>
                  </Suspense>
                </SafeComponent>}/>
          </Routes>
        </div>
    </>
  )
}