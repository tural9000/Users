  export interface IAddress {
    country: string;
    city: string;
    street: string;
    house: string;
  }
export interface IFields {
    email: string;
    password: number;
    confirmPassword: number;
    address: IAddress
  }
  export interface IOption{
    value: string;
    label: string

  }

  export interface IField {
    name: string;
    lastName: string
    email: string;
    age: number
    gender: string
    phone: string;
    city: string
    // address: IAddress;
  }
  