import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { reduxStore, RootState } from './store';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<RootState>;
}

export const ReduxStoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  return <Provider store={reduxStore}>{children}</Provider>;
};
