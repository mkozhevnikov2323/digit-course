import { Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';
import OAuthRedirectHandler from '../components/AuthForm/ui/OAuthRedirectHandler';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        index
        element={<MainPage />}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
      />
      <Route
        path="/auth/yandex"
        element={<OAuthRedirectHandler />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};
