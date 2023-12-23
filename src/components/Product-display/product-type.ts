// productTypes.ts

type Rating = {
    rate: number;
    count: number;
  };
  
 export type AllProductsType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  };
  
  export type ProductTileProps = {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  
  export type HomeProps = {
    products: ProductTileProps[];
  };
  