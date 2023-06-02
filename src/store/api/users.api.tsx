
import {api} from './api';
import { IUserData } from './../../types/user.types';

export const usersApi = api.injectEndpoints({
    endpoints: build => ({
        addUser: build.mutation<null, IUserData>({
            query: (body) => ({
                url: 'results',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: build.mutation<null, number>({
            query: (id) => ({
                url: `results/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users']
        })
    })
})

export const {useAddUserMutation, useDeleteUserMutation } = usersApi;