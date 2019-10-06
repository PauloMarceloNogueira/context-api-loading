import React, { useContext } from 'react';

export const INITIAL_STATE = {
  loading: {
    show: false,
    message: null
  },
  error: {
    show: false,
    message: null
  }
};

const PageContext = React.createContext(INITIAL_STATE);
export const PageProvider = PageContext.Provider;
export const PageConsumer = PageContext.Consumer;

export default PageContext;
