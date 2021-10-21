import React from 'react';

interface Props {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

const AddProductToWishList = ({ onAddToWishList, onRequestClose }: Props) => {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onRequestClose}>Não</button>
      <button onClick={onAddToWishList}>Sim</button>
    </span>
  );
};

export default AddProductToWishList;
