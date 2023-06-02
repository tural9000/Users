import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actions} from "../store/user/user.slice";
import * as userActions from "../store/user/user.action";

// console.log(actions)

// actions
const rootActions = {
  ...actions,
  ...userActions
  // ...userSlice.actions 
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => 
        bindActionCreators(rootActions, dispatch), 
  [dispatch]);
};
