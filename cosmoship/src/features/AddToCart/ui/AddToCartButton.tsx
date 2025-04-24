import { addToCart } from '@/entities/Cart';
import { Ship } from '@/entities/Ship';
import { useDispatch } from 'react-redux';
import React from 'react';

export const AddToCartButton: React.FC<{ ship: Ship }> = ({ ship }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(
      addToCart({
        id: ship.id,
        name: ship.name,
        image: ship.image,
        price: ship.price,
        quantity: 1,
      }),
    );
  };

  return <button onClick={handleAdd}>Add to Cart</button>;
};
