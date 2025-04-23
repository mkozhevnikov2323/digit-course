import { createMachine } from 'xstate';

export const orderCheckoutMachine = createMachine({
  id: 'orderCheckout',
  initial: 'cart',
  states: {
    cart: {
      on: {
        NEXT: 'delivery',
      },
    },
    delivery: {
      on: {
        NEXT: 'payment',
        BACK: 'cart',
      },
    },
    payment: {
      on: {
        NEXT: 'confirmation',
        BACK: 'delivery',
      },
    },
    confirmation: {
      type: 'final',
    },
  },
});
