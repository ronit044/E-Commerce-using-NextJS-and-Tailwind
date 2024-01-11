import { ProductTileProps } from '@/components/Product-display/product-type';

async function fetchProductData(): Promise<ProductTileProps[]> {
  const apiUrl = process.env.NEXT_PUBLIC_PRODUCTS_API || "";
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}

export {fetchProductData};