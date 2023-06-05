import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from "../comonents/layouts/RootLayout"
import MainPage from "../pages/mainPage/MainPage"
import Page404 from "../pages/page404.tsx/Page404"
import UsersPage from '../pages/users/Users'
import UserDetails from "../pages/userDetails/UserDetails"

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<RootLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path="details/:id" element={<UserDetails />}/>
        <Route path="*" element={<Page404/>}/>
      </Route>
    )
  )