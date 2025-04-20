import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Ship } from '../model/types/shipSchema';

interface ShipCardProps {
  ship: Ship;
}

export const ShipCard: React.FC<ShipCardProps> = ({ ship }) => (
  <Card
    variant="outlined"
    sx={{ minWidth: 275, m: 1, cursor: 'pointer' }}
  >
    <CardContent>
      <Typography variant="h5">{ship.name}</Typography>
      <Box
        sx={{
          width: 200,
          height: 200,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Box
          component="img"
          alt={ship.name}
          src={ship.image}
          loading="lazy"
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Typography color="text.secondary">{ship.type}</Typography>
      <Typography>Manufacturer: {ship.manufacturer}</Typography>
      <Typography>Max Speed: {ship.speed}</Typography>
      <Typography fontWeight={600}>Price: {ship.price}</Typography>
    </CardContent>
  </Card>
);
