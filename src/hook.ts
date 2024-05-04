import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";

// 更改 Data 內容時用 
export const useAppDispatch = () => useDispatch<AppDispatch>();
// 獲取 Data 用
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
