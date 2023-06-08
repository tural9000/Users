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
    id: string,
    name: {
      first: string
      last: string
    },
    email: string;
    age: string;
    gender: string
    phone: string;
    city: string
    image: string
    // address: IAddress;
  }
  