import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// States
import selectionReducer from "@/state/selection";

const selectionPersistConfig = {
  key: "selection",
  storage,
};

const selectionPersistedReducer = persistReducer(selectionPersistConfig, selectionReducer);

export const store = configureStore({
  reducer: {
    selection: selectionPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;