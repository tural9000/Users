import styles from "./app.module.scss";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AppHeader from './../appHeader/AppHeader';
import MainPage from "../../pages/mainPage/MainPage";



const App = () => {
  return (
    <Router>
      <div className={styles.app}>
         <AppHeader/>
         <div className={styles.content}>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              {/* <Route path='/users' element={<UsersPage/>}/> */}
              {/* <Route path="comics/:id" element={<SinglePage />}/> */}
              {/* <Route path="characters/:id" element={<SinglePage //>}/> */}
              {/* <Route path="comics/:comicId" element={<SingleComicLayout/>}/> */}
              {/* <Route path="*" element={<Page404/>}/> */}
            </Routes>
         </div>
      </div>
    </Router>
    
  );
};

export default App;
