import { ShipCard, useShipStore } from '@/entities/Ship';
import { fetchShips } from '@/entities/Ship';
import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';

export const ShipList: React.FC = () => {
  const ships = useShipStore((state) => state.ships);
  const setShips = useShipStore((state) => state.setShips);

  useEffect(() => {
    fetchShips()
      .then(setShips)
      .catch((error) => {
        console.error('Ошибка получения кораблей:', error);
      });
  }, [setShips]);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        gutterBottom
      >
        The best Spaceships are presented in our shop
      </Typography>
      <Grid
        container
        spacing={2}
      >
        {ships.map((ship) => (
          <Grid key={ship.id}>
            <ShipCard ship={ship} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
