export interface Inventory {
  items: Items;
  _id: string;
  products: Product[];
}

export interface Items {
  pizza_bases: Basis[];
  sauces: Sauce[];
  cheese: Cheese[];
  vegs: Veg[];
  meat: Meat[];
}

export interface Basis {
  name: string;
  cost_per: number;
  _id: string;
}

export interface Sauce {
  name: string;
  cost_per: number;
  _id: string;
}

export interface Cheese {
  name: string;
  cost_per: number;
  _id: string;
}

export interface Veg {
  name: string;
  cost_per: number;
  _id: string;
}

export interface Meat {
  name: string;
  cost_per: number;
  _id: string;
}

export interface Product {
  name: string;
  product_image: string;
  _id: string;
}
