import { createActor, interpret, type ActorRefFrom } from 'xstate';
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { orderCheckoutMachine } from '../model/machine/orderCheckoutMachine';
import { useSelector } from '@xstate/react';

type OrderFlowActorRef = ActorRefFrom<typeof orderCheckoutMachine>;

const OrderFlowContext = createContext<OrderFlowActorRef | null>(null);

export const OrderFlowProvider = ({ children }: { children: ReactNode }) => {
  const actorRef = useMemo(() => {
    return interpret(orderCheckoutMachine).start();
  }, []);

  return (
    <OrderFlowContext.Provider value={actorRef}>
      {children}
    </OrderFlowContext.Provider>
  );
};

export const useOrderFlow = () => {
  const actorRef = useContext(OrderFlowContext);
  if (!actorRef) {
    throw new Error(
      'useOrderFlow должен использоваться внутри <OrderFlowProvider>',
    );
  }

  const state = useSelector(actorRef, (snapshot) => snapshot);
  return { state, send: actorRef.send };
};
