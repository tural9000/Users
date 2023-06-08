export interface IUser {
    id: number
    gender: string
    name: {
        first: string,
        last : string
    }
    email: string
    age: number
    city: string
    phone: string
    image?: string
}
export interface IUserData extends Omit<IUser, 'id' | 'image'>{};
export interface IUserUpdate extends Omit<IUser, 'gender' | 'image' | 'city' | 'phone'>{};

export interface IUserEdit {
    id: number
    firstName: string | undefined | null
    lastName: string | undefined | null
    email: string
    age: number
}

export interface IInitialUserState{
    users: IUser[]
    // usersLoadingStatus: string
    isLoading: boolean
    error: string | null
}