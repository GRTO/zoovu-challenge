import React from 'react';
import { GameStore } from './game.store';
import { UserStore } from './user.store';

export const store = {
  User: new UserStore(),
  Gamer: new GameStore(),
};

export type StoreType = typeof store;

export const StoreContext = React.createContext({} as StoreType);
export const useStoreContext = () => React.useContext(StoreContext);
