import styles from "./app.module.scss";
import Spinner from "../spinner/Spinner";
import { useGetGoodsQuery } from "../../store/api/api";
import { useState } from "react";
import { useAddProductsMutation, useDeleteProductMutation } from "../../store/api/goods.api";
import AppHeader from './../appHeader/AppHeader';



const App = () => {
  return (
    <div className={styles.content}>
         <AppHeader/>
    </div>
  );
};

export default App;
