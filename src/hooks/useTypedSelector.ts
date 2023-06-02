import { TypedUseSelectorHook , useSelector} from 'react-redux'
import { RootState } from '../store'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


// import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
// import type {RootState, AppDispatch} from './store';

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;