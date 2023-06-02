import {createAsyncThunk} from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook";
import { IUser } from './../../types/user.types';


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkApi) => {
        try {
            const {request} = useHttp();
            return await request('http://localhost:3001/results')
        } catch (error) {
            return thunkApi.rejectWithValue({})
        }
    }
)
