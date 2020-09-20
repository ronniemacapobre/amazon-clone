import React, { createContext, useContext, useReducer } from 'react';

// Context initialization
export const StateContext = createContext();

// Wrap the entire app and provide data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
