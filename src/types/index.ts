export interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  brand: string;
  rating:number
  description:string
  images:string
}
export interface ICart {
  id: number;
  userId: number;
  products: IProduct[];
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface IRecipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  rating: number;
  servings: number;
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      country: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
    department: string;
    name: string;
    title: string;
  };
  crypto: {
    coin: string;
    network: string;
    wallet: string;
  };
  ssn: string;
  ein: string;
  ip: string;
  macAddress: string;
  userAgent: string;
  role: string;
};
