import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import axios from 'axios';
import { VITE_API_URL } from '../../../utils/env';

export interface YandexAuthBody {
  code: string;
}

export default function OAuthRedirectHandler() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get('code');

    if (code) {
      const body: YandexAuthBody = { code };

      axios
        .post(`${VITE_API_URL}/auth/yandex`, body)
        .then((response) => {
          const { token, user } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/profile');
        })
        .catch(() => {
          alert('Авторизация не удалась');
        });
    } else {
      alert('Нет кода в URL');
    }
  }, [params, navigate]);

  return <p>Обработка авторизации...</p>;
}
