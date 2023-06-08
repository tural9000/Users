import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from "../components/layouts/RootLayout"
import MainPage from "../pages/mainPage/MainPage"
import Page404 from "../pages/page404.tsx/Page404"
import UsersPage from '../pages/users/Users'
import UserDetails from "../pages/userDetails/UserDetails"
import Editab from '../components/table/Table';
import EditableTable from '../components/table/Table1';

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<RootLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        {/* <Route path='/users' element={<Editab readonly={false}/>}/> */}s
        <Route path="details/:id" element={<UserDetails />}/>
        <Route path="*" element={<Page404/>}/>
      </Route>
    )
  )