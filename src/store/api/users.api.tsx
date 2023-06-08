
import {api} from './api';
import { IUser, IUserData, IUserUpdate } from './../../types/user.types';
import { IField } from '../../components/form/form.interface';

export const usersApi = api.injectEndpoints({
    endpoints: build => ({
        addUser: build.mutation<null, any>({
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
        }),
        updateUser: build.mutation<any, Partial<any>>({
            query: (body) => ({
              url: `results/${body.id}`,
              method: 'PUT',
              body: body,
            }),
            invalidatesTags: ['Users']
          }),
       
    })
})

export const {useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation} = usersApi;