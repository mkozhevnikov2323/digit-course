import { Route, Routes } from 'react-router';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';

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
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
};
