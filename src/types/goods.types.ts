export interface IGoods {
    id: number
    name: string
    // image: string
};

export interface IGoodsData extends Omit<IGoods, 'id'>{};// eynish shey olur defe id siz