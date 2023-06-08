import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../../types/user.types';
// import { IGoods } from './../../types/goods.types';
const _api = ' http://localhost:3001/';

export const api  = createApi({
    reducerPath: 'api',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: _api}),
    endpoints: (build) => ({
        getAllUsers: build.query<IUser[], void>({
            // query: (limit: '') => `api?${limit && `_limit=${limit}`}`,
            query: () => `results`,
            providesTags: ['Users']
        }),
        // get partial user
        getUser: build.query<null, string | number>({
            query: (id) => `results/${id}`,
            providesTags: ['Users']
        })
        // search user by name
        // getUser: build.query<null, string>({
        //     query: (user:string) => `results/search?q=user`
        // })

        // get by page number
        // getAlbums: builder.query({
        //     query: (page = 1) => `albums?_page=${page}&_limit=10`,
        // }),
    })
})

export const {useGetAllUsersQuery, useGetUserQuery} = api;