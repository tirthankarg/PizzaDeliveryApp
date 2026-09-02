import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, inceaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="items-center space-x-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(inceaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
