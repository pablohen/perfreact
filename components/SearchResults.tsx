import React from 'react';
import { FormattedProduct } from '../interfaces/FormattedProducts';
import ProductItem from './ProductItem';

interface Props {
  results: FormattedProduct[];
  onAddToWishList: (id: number) => void;
  totalPrice: number;
}

const SearchResults = ({ results, onAddToWishList, totalPrice }: Props) => {
  return (
    <div>
      <h1>{totalPrice}</h1>
      {results?.map((product) => (
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
