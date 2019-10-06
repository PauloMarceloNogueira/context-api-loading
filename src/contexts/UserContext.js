import React from 'react';

export const USER_INITIAL_STATE = {
  user: {},
  latlong: {},
  position: 0
};

const UserContext = React.createContext({});
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
