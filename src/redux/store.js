import { configureStore, combineReducers,  } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice'
import productReducer from './slice/authSlice'

const rootReducer = combineReducers({ 
  auth: authReducer,
  product:productReducer,

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