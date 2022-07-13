export interface INavItems {
  label: string;
  subLabel?: string;
  children?: Array<INavItem>;
  href?: string;
  icon: JSX.Element;
}

export interface INavItem {
  label: string;
  subLabel?: string;
  href: string;
  icon: JSX.Element;
}

export interface IProductCart {
  name: string;
  id: string;
  description: string;
  price: number;
  category: string;
  image: string;
  currency: string;
  sku: string;
  quantity?: number;
  value?: number;
}

export interface IProduct {
  name: string;
  id: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  currency: string;
  sku: string;
}

export interface IProductCartServer {
  [id: string]: IProduct;
}
