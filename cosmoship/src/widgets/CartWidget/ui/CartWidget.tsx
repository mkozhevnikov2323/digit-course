import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/providers/redux/store';
import { removeFromCart } from '@/entities/Cart';
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const CartWidget: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return <Typography variant="body1">Cart is empty.</Typography>;
  }

  return (
    <Box>
      <List>
        {items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.name} x${item.quantity}`}
              secondary={`$${item.price * item.quantity}`}
            />
            <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
