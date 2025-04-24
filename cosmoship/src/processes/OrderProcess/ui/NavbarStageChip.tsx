import React from 'react';
import { useOrderFlow } from './OrderFlowProvider';
import { Chip } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const stageMap = {
  cart: {
    label: 'Корзина',
    color: 'default' as const,
    icon: <LocalMallIcon fontSize="small" />,
  },
  delivery: {
    label: 'Доставка',
    color: 'info' as const,
    icon: <LocalShippingIcon fontSize="small" />,
  },
  payment: {
    label: 'Оплата',
    color: 'warning' as const,
    icon: <PaymentIcon fontSize="small" />,
  },
  confirmation: {
    label: 'Подтверждено',
    color: 'success' as const,
    icon: <CheckCircleIcon fontSize="small" />,
  },
};

export const NavbarStageChip: React.FC = () => {
  const { state } = useOrderFlow();
  const current = stageMap[state.value as keyof typeof stageMap];

  return (
    <Chip
      label={`Шаг: ${current.label}`}
      color={current.color}
      icon={current.icon}
      variant="filled"
      size="small"
      sx={{ ml: 2 }}
    />
  );
};
