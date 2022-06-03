import { configureStore } from '@reduxjs/toolkit';
import productReducer, { productsFetch } from './reducers/productSlice';
import { productsAPi } from './reducers/productsApi';
import cartReducer, {getTotals} from './reducers/cartSlice';



export const store = configureStore({
  devTools: true,
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsAPi.reducerPath]: productsAPi.reducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(productsAPi.middleware),
 
});

store.dispatch(productsFetch());
store.dispatch(getTotals());