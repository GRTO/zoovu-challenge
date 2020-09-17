import React from 'react';
import { UserStore } from './user.store';

export const store = {
  User: new UserStore(),
};

export type StoreType = typeof store;

export const StoreContext = React.createContext({} as StoreType);
export const useStoreContext = () => React.useContext(StoreContext);
