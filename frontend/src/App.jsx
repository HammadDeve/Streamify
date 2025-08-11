import { Navigate, Route, Routes } from 'react-router'
import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import NotificationPage from "./pages/NotificationPage.jsx"
import CallPage from "./pages/CallPage.jsx"
import ChatPage from "./pages/ChatPage.jsx"
import OnBoardingPage from "./pages/OnBoardingPage.jsx"
import FriendsPage from "./pages/FriendPage.jsx"

import {Toaster} from "react-hot-toast"
// import { useState, useEffect } from 'react'
// import {useQuery} from "@tanstack/react-query";
import PageLoader from './componenets/PageLoader.jsx'
import useAuthUser from './hooks/useAuthUser.js'
import Layout  from './componenets/Layout.jsx'
import { useThemeStore } from './store/useThemeStore.js'
// import { getAuthUser } from './lib/api.js'

const App = () => { 
   
  const { isLoading, authUser} = useAuthUser();
  const {theme} = useThemeStore();

  const isAuthenticated = Boolean(authUser);
  const isOnBoarded = authUser?.isOnboarded;

  if (isLoading) return <PageLoader/>
  
  return (
    <div className='h-screen' data-theme={theme}>
    <Routes>
       <Route path='/' element={isAuthenticated && isOnBoarded ? (<Layout showSidebar={true}><HomePage/></Layout>) : (<Navigate to = {!isAuthenticated ? "/login" : "/onboarding"}/>)}/>
       <Route path='/signup' element={!isAuthenticated ?<SignUpPage/>: <Navigate to={isOnBoarded? "/": "/onboarding"}/>}/>
       <Route path='/login' element={!isAuthenticated ?<LoginPage/>:<Navigate to={isOnBoarded? "/": "/onboarding"}/>}/>
        <Route path="/notifications" element={isAuthenticated && isOnBoarded ? (<Layout showSidebar={true}><NotificationPage /></Layout>) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)}/>
        <Route path="/call/:id" element={isAuthenticated && isOnBoarded ? (<CallPage />) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)}/>
       <Route path="/chat/:id"element={isAuthenticated && isOnBoarded ? (<Layout showSidebar={false}><ChatPage /> </Layout>) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)}/>
       <Route path="/onboarding" element={ isAuthenticated ? ( !isOnBoarded ? ( <OnBoardingPage />) : (<Navigate to="/" />) ) : ( <Navigate to="/login" />)}/>
       <Route path="/friends" element={ isAuthenticated && isOnBoarded ? ( <Layout showSidebar={true}> <FriendsPage /> </Layout>) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />)}/>

    </Routes> 
    <Toaster/>
    </div>
  )
}

export default App