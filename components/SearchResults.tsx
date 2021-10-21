import React, { useMemo } from 'react';
import { Product } from '../interfaces/Product';
import ProductItem from './ProductItem';

interface Props {
  results: Product[];
  onAddToWishList: (id: number) => void;
}

const SearchResults = ({ results, onAddToWishList }: Props) => {
  const calcTotal = () => {
    return results.reduce((total, product) => total + product.price, 0);
  };

  const totalPrice = useMemo(calcTotal, [results]);

  return (
    <div>
      <h1>{totalPrice}</h1>
      {results.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
};

export default SearchResults;
