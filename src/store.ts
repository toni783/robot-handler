import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import { robotDashboardApi } from "./services/RobotDashboard.api";

const reducer = combineReducers({
  [robotDashboardApi.reducerPath]: robotDashboardApi.reducer,
});

export function makeStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      // https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
      getDefaultMiddleware({ serializableCheck: false }).concat(
        robotDashboardApi.middleware
      ),
    preloadedState,
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof reducer>;

export type AppStore = ReturnType<typeof makeStore>;

export default store;
