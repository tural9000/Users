export interface IUser {
    id?: number
    gender: string
    name: {
        first: string
        last: string
    }
    email: string
    age: number
    city: string
    phone: string
    image?: string
}
export interface IUserData extends Omit<IUser, 'id' | 'image'>{};


export interface IInitialUserState{
    users: IUser[]
    // usersLoadingStatus: string
    isLoading: boolean
    error: string | null
}