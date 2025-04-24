import { CartWidget } from '@/widgets/CartWidget';
import { useOrderFlow } from '@/processes/OrderProcess/ui/OrderFlowProvider';
import { Button } from '@mui/material';

const CartPage = () => {
  const orderFlow = useOrderFlow();

  return (
    <div>
      <h1>Your Cart</h1>
      <CartWidget />
      <Button
        variant="contained"
        onClick={() => orderFlow.send({ type: 'NEXT' })}
      >
        Перейти к доставке
      </Button>
    </div>
  );
};

export default CartPage;
