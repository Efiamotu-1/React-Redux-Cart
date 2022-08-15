import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice"

export const fetchCartData = () => {
    return async dispatch =>  {
        const fetchData = async () => {
            const response = await fetch ('https://fir-9-dojo-b8ade-default-rtdb.firebaseio.com/cart.json')
        
            // if(!response.ok) {
            //     throw new Error('could not fetch data')
            // }


            const data = await response.json()

            return data;
           

        };

        try {
           const cartData = await fetchData();
           dispatch(cartActions.replaceCart({
            items : cartActions.items || [],
            totalQuantity : cartData.totalQuantity
            
           }))
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                status : 'error',
                title : 'Error',
                message : 'Sending cart data failed'
              }))
        }
    }
}

export const sendCartData =(cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                 status : 'pending',
                  title : 'Sending',
                  message : 'Sending cart data'
                }))

        const sendRequest = async() => {
            const response = await fetch('https://fir-9-dojo-b8ade-default-rtdb.firebaseio.com/cart.json', {
                method : 'PUT',
                body : JSON.stringify({items : cart.items, totalQuantity : cart.totalQuantity})
              })
        }
       

    //   if(!response.ok) {
    //           throw new Error('sending cart data failed')
    //         }

    try {
        await sendRequest()

        dispatch(uiActions.showNotification({
            status : 'success',
            title : 'Success',
            message : 'Sent cart data successfully'
          }))
    }
    catch (error){
        dispatch(uiActions.showNotification({
                  status : 'error',
                  title : 'Error',
                  message : 'Sending cart data failed'
                }))
    }
      
           
      

    }
}

