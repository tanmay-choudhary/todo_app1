import { createStore } from "redux";
import todoReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "persist-store",
  storage,
};
const persisted = persistReducer(persistConfig, todoReducer);
const store = createStore(persisted);
export const persistor = persistStore(store);
export default store;
