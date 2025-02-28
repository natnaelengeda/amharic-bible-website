"use client";

import React from 'react'

// State
import { Provider } from 'react-redux';
import { persistor, store } from "./store";
import { PersistGate } from 'redux-persist/integration/react';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider
      store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
