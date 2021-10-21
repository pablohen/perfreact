import React, { memo, useState } from 'react';
import { FormattedProduct } from '../interfaces/FormattedProducts';
// import AddProductToWishList from './AddProductToWishList';
import dynamic from 'next/dynamic';

const AddProductToWishList = dynamic(
  () => {
    return import('./AddProductToWishList');
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface Props {
  product: FormattedProduct;
  onAddToWishList: (id: number) => void;
}

const ProductItem = ({ product, onAddToWishList }: Props) => {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
};

export default memo(ProductItem, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product)
);
