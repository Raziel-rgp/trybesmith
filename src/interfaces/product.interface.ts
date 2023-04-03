export interface NewProduct {
  name: string;
  amount: string;
}

export interface Product extends NewProduct {
  id: number;
  orderId?: Array<number>;
}