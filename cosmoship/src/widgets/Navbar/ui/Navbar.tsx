import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ThemeButton } from '@/widgets/ThemeButton';
import { ModalLoginForm, useAuth } from '@/features/Authorization';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/redux/store';
import { NavbarStageChip } from '@/processes/OrderProcess/ui/NavbarStageChip';

export const Navbar: React.FC = () => {
  const { token, logout } = useAuth();

  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const handleOpenModal = () => setAuthModalOpen(true);
  const handleCloseModal = () => setAuthModalOpen(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={1}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Cosmoship Market
          </Typography>

          <Box mr={2}>
            {token ? (
              <Box
                display="flex"
                alignItems="center"
                gap={1}
              >
                <NavbarStageChip />
                <Typography variant="body2">Статус: Авторизован</Typography>

                <IconButton
                  component={Link}
                  to="/cart"
                  size="small"
                  color="inherit"
                >
                  <Badge
                    badgeContent={cartItems.length}
                    color="primary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>

                <Button
                  size="small"
                  variant="outlined"
                  onClick={logout}
                >
                  Выйти
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                alignItems="center"
                gap={1}
              >
                <Typography variant="body2">Гость</Typography>
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleOpenModal}
                >
                  Войти / Регистрация
                </Button>
              </Box>
            )}
          </Box>

          <Box>
            <ThemeButton />
          </Box>
        </Toolbar>
      </AppBar>
      <ModalLoginForm
        open={isAuthModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};
