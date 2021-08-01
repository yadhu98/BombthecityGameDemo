import { configureStore } from '@reduxjs/toolkit';
import splashScreenReducer from '../components/Screens/splashscreen/store/slice'
export const store = configureStore({
  reducer: {
    splashscreen : splashScreenReducer,
  },
});
