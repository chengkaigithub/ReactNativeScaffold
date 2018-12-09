import React from "react";
import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';

import rootReducer from './reducers';
import { userReducerName } from "./reducers/userReducer";

const whitelist = [userReducerName]; // only userInfo will be persisted

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key',
  onError: (error) => console.log('encryptor store error in store/index.js', error)
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist,
  transforms: [encryptor]
};

// 持久化存储 实例配置
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
export const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunkMiddleware,
  )
);

// 持久化存储
export const persistor = persistStore(store);

