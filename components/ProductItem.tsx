import React, { memo } from 'react';
import { Product } from '../interfaces/Product';

interface Props {
  product: Product;
  onAddToWishList: (id: number) => void;
}

const ProductItem = ({ product, onAddToWishList }: Props) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => onAddToWishList}>Add to Wishlist</button>
    </div>
  );
};

export default memo(ProductItem, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
);
