import { RouteObject } from 'react-router-dom';

import { MainPageAsync } from '@/pages/MainPage';
import { ProductPageAsync } from '@/pages/ProductPage';
import { CartPageAsync } from '@/pages/CartPage';
import { Protected } from './ProtectedRoute';

export const enum AppRoutes {
  MAIN = 'main',
  PRODUCT = 'product',
  CART = 'cart',
  NOT_FOUND = 'notFound',
  SUCCESS = 'success',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRODUCT]: '/product/:productId',
  [AppRoutes.CART]: '/cart',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.SUCCESS]: '/success',
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.PRODUCT]: {
    path: RoutePath.product,
    element: <ProductPageAsync />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: (
      <Protected>
        <CartPageAsync />
      </Protected>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: null,
  },
  [AppRoutes.SUCCESS]: {
    path: RoutePath.success,
    element: null,
  },
};
