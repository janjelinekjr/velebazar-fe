import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import headerSlice from "./slices/headerSlice/headerSlice";

export const store = configureStore({
    reducer: combineReducers({
        header: headerSlice,
    }),
    middleware: (getDefaultMiddleware) => {
        const result = getDefaultMiddleware();
        if (process.env.NODE_ENV === 'development') result.push(logger);
        return result;
    },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
