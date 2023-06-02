import styles from "./app.module.scss";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import MainPage from "../../pages/mainPage/MainPage";
import UsersPage from "../../pages/users/Users";
import UserDetails from "../../pages/userDetails/UserDetails";
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Page404 from "../../pages/page404.tsx/Page404";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout/>}>
      <Route index element={<MainPage/>}/>
      <Route path='/users' element={<UsersPage/>}/>
      <Route path="details/:id" element={<UserDetails />}/>
      <Route path="*" element={<Page404/>}/>
    </Route>
  )
)
const App = () => {
  return ( 
      <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
