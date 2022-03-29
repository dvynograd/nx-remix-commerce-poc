import { ProductInterface } from "../data";

export interface ProductsProps {
    product: ProductInterface;
  }

export function Product({ product }: ProductsProps) {
    return (
      <div>
        {product.title}: {product.price} SEK
        <img src={product.image} alt={product.title} />
      </div>
    );
  }
  

  export default Product