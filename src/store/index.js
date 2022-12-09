import { configureStore } from '@reduxjs/toolkit';
import { themeModeReducer } from './modules/header';
import { writeContentReducer } from './modules/write';
import { userReducer } from './modules/user';
import { detailPageReducer } from './modules/detailPage';
import { authReducer } from './modules/auth';
import { myLologReducer } from './modules/mainpostlist';

const store = configureStore({
  reducer: {
    darkMode: themeModeReducer,
    writeContent: writeContentReducer,
    detailData: detailPageReducer,
    user: userReducer,
    auth: authReducer,
    myLologData: myLologReducer,
  },
});

export default store;
