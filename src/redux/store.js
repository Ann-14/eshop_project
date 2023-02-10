import { configureStore, combineReducers,  } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice'
import productReducer from './slice/productSlice'
import filterReducer from './slice/filterSlice'

const rootReducer = combineReducers({ 
  auth: authReducer,
  product:productReducer,
  filter:filterReducer,

 }

)

const store = configureStore({
  reducer: rootReducer,

 // Needed to add middleware to avoid error: 'A non-serializable value was detected in an action'
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware({
  serializableCheck:false,
 })
});
export default store