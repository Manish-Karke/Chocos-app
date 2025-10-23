export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface warehouse {
  id: number;
  name: string;
  pincode: string;
}

export interface DeliveryPerson {
  id: number;
  name: string;
  phone: number;
  wareHousesId: string;
}

export interface Inventory {
  id: number;
  sku: string;
  wareHouseId: string;
  productId: string;
}

export interface InventoryData {
  sku: string;
  wareHousesId: number;
  productId: number;
}

export interface Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}
