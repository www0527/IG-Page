import { configureStore } from "@reduxjs/toolkit";
import { homeApi, homeApiReducer } from "services/homeServices";
import friendReducer from "slice/friendSlice";

export const store = configureStore({
    reducer: {
        [homeApi.reducerPath]:homeApiReducer,
        friendReducer,
    },
    // 將API的service綁定到store上
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware().concat(homeApi.middleware),
});
// 以 Type 輸出 hook
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;