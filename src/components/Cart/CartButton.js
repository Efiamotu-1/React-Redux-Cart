import { useDispatch, useSelector} from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const cartCount = useSelector(state => state.cart.totalQuantity)

  const toggleCart = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <button onClick={toggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
