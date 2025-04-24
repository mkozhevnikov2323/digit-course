import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { authApi } from '../api/authApi';
import { useAuth } from '../model/context/AuthContext';
import { AuthMode } from '../model/types/authSchema';

interface LoginFormProps {
  onClose?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login, token } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const data = { email, password };
      const response =
        mode === 'login'
          ? await authApi.login(data)
          : await authApi.register(data);

      login(response.token);
      if (onClose) onClose();
    } catch (error: any) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Произошла ошибка. Попробуйте снова.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        sx={{ mt: 8, p: 4 }}
      >
        <Tabs
          value={mode}
          onChange={(_, newValue) => setMode(newValue)}
          variant="fullWidth"
          sx={{ mb: 2 }}
        >
          <Tab
            label="Вход"
            value="login"
          />
          <Tab
            label="Регистрация"
            value="register"
          />
        </Tabs>

        <Typography
          variant="h5"
          component="h1"
          align="center"
          gutterBottom
        >
          {mode === 'login' ? 'Войти' : 'Создать аккаунт'}
        </Typography>

        {mode === 'login' && (
          <Typography
            variant="subtitle2"
            align="center"
          >
            Тестовый юзер: login: test@example.com password: Qwerty123
          </Typography>
        )}

        {mode === 'register' && (
          <Typography
            variant="subtitle2"
            align="center"
          >
            Для регистрации: login: any password: any
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <TextField
            label="Пароль"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMessage && (
            <Alert
              severity="error"
              sx={{ mt: 2 }}
            >
              {errorMessage}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={isSubmitting}
          >
            {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
