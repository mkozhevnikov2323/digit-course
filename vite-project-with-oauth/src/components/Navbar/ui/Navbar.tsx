import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { useState } from 'react';
import { AuthForm } from '../../AuthForm';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Мой Проект
          </Typography>
          <Button
            color="inherit"
            onClick={() => setOpen(true)}
          >
            Войти
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Авторизация</DialogTitle>
        <DialogContent>
          <AuthForm />
        </DialogContent>
      </Dialog>
    </>
  );
};
