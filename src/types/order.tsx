export interface Order {
  toppings: Toppings;
  is_custom: boolean;
  _id: string;
  user_id: string;
  name: string;
  contact_number: string;
  email: string;
  inventory_id: string;
  line_items: OrderItem[];
  status: string;
  createdAt: string;
  updatedAt: string;
  price: number;
}

export interface OrderItem {
  product_id: string;
  name: string;
  quantity: number;
  _id: string;
}

export interface Toppings {
  pizza_bases: Basis[];
  sauces: Sauce[];
  cheese: Cheese[];
  vegs: Veg[];
  meat: Meat[];
}

export interface Basis {
  _id: string;
  name: string;
  cost_per: number;
}

export interface Sauce {
  _id: string;
  name: string;
  cost_per: number;
}

export interface Cheese {
  _id: string;
  name: string;
  cost_per: number;
}

export interface Veg {
  _id: string;
  name: string;
  cost_per: number;
}

export interface Meat {
  _id: string;
  name: string;
  cost_per: number;
}
