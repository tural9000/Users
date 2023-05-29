// import { IRecipeData } from '../../types/goods.types';
import { IGoodsData } from '../../types/goods.types';
import {api} from './api';

export const goodsApi = api.injectEndpoints({
    endpoints: build => ({
        addProducts: build.mutation<null, IGoodsData>({
            query: (body) => ({
                url: 'goods',
                method: 'POST',
                body
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        }),
        deleteProduct: build.mutation<null, number>({
            query: (id) => ({
                url: `goods/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Products', id: 'LIST'}]
        })
    })
})

export const {useAddProductsMutation, useDeleteProductMutation} = goodsApi