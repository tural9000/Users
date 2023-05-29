import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGoods } from './../../types/goods.types';
const _api = ' http://localhost:3001/';

export const api  = createApi({
    reducerPath: 'api',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: _api}),
    endpoints: (build) => ({
        getGoods: build.query<IGoods[], string>({
            query: (limit: '') => `goods?${limit && `_limit=${limit}`}`,
            providesTags: (result:any) => result
              ? [
                  ...result.map(({ id }:{id:number}) => ({ type: 'Products', id })),
                  { type: 'Products', id: 'LIST' },
                ]
              : [{ type: 'Products', id: 'LIST' }],
        })
    })
})

export const {useGetGoodsQuery} = api