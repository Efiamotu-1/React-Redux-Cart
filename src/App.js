import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';
// import { sendCartData } from './store/cart-slice';

let isInitial = true

function App() {


  const show = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  // Using action creators

  useEffect(() => {
    if(isInitial) {
      isInitial = false
      return;
    }

    if(cart.changed) {
      dispatch(sendCartData(cart))

    }

  }, [cart, dispatch])

  // Using useEffect to manage state and asynchronous code

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(uiActions.showNotification({
  //       status : 'pending',
  //       title : 'Sending',
  //       message : 'Sending cart data'
  //     }))
  //    const response = await fetch('https://fir-9-dojo-b8ade-default-rtdb.firebaseio.com/cart.json', {
  //       method : 'PUT',
  //       body : JSON.stringify(cart)
  //     })

  //     if(!response.ok) {
  //       throw new Error('sending cart data failed')
  //     }

  //     dispatch(uiActions.showNotification({
  //       status : 'success',
  //       title : 'Success',
  //       message : 'Sent cart data successfully'
  //     }))

      
  //   }

  //   if(isInitial) {
  //     isInitial = false
  //     return;
  //   }
  //   sendCartData().catch(error => {

  //     dispatch(uiActions.showNotification({
  //       status : 'error',
  //       title : 'Error',
  //       message : 'Sending cart data failed'
  //     }))
  //   })
   
  // }, [cart, dispatch])

  return (
    <Fragment>
     {notification && <Notification  status={notification.status} title={notification.title} message={notification.message}/> }
      <Layout>
      {show &&  <Cart /> }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
