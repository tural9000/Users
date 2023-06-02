import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IInitialUserState, IUser, IUserData } from "../../types/user.types";
import { fetchUsers } from './user.action';


const initialState:IInitialUserState = {
    isLoading: false,
    error: null,
    users: []
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userCreated: (state, action:PayloadAction<IUserData>) => {
            state.users.push(action.payload);
        },
        userDeleted: (state, action) => {
            state.users = state.users.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: bulider => {
        bulider
            .addCase(fetchUsers.pending, state => {state.isLoading = true})
            .addCase(fetchUsers.fulfilled, (state, action:PayloadAction<IUser>) => {
                state.isLoading = false
                state.users.push(action.payload)
            })
            .addCase(fetchUsers.rejected, (state, action:any) =>{
                state.isLoading = false
                state.error = action.payload.error
                state.users = [] 
            })

    }  
})

export const {actions, reducer} = userSlice;