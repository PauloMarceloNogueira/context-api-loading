import React, { useState } from 'react';
import './App.css';
import PageContext, { INITIAL_STATE } from './contexts/PageContext';
import UserContext, { USER_INITIAL_STATE } from './contexts/UserContext';
import HomePage from './components/HomePage';
import LoadingComponent from './components/LoadingComponent';
import ErrorsComponent from './components/ErrorsComponent';

function App() {
  const [pageState, setPageState] = useState(INITIAL_STATE);
  const [userState, setUserState] = useState(USER_INITIAL_STATE);
  const showLoading = message => {
    const newPageState = {
      ...pageState,
      loading: {
        show: true,
        message
      }
    };
    setPageState(newPageState);
  };

  const stopLoading = () => {
    const newPageState = {
      ...pageState,
      loading: {
        show: false,
        message: null
      }
    };
    setPageState(newPageState);
  };

  const setError = message => {
    const newPageState = {
      ...pageState,
      error: {
        show: true,
        message
      }
    };
    setPageState(newPageState);
  };

  const clearError = () => {
    const newPageState = {
      ...pageState,
      error: {
        show: false,
        message: null
      }
    };
    setPageState(newPageState);
  };

  const setLatLong = latlong => {
    const newUserState = {
      ...userState,
      latlong: {
        latitute: latlong.latitude,
        longitude: latlong.longitude
      }
    };
    setUserState(newUserState);
  };

  return (
    <PageContext.Provider
      value={{
        state: pageState,
        showLoading,
        stopLoading,
        setError,
        clearError
      }}
    >
      <UserContext.Provider value={{ state: userState, fncs: { setLatLong } }}>
        <div>
          <HomePage></HomePage>
          <LoadingComponent></LoadingComponent>
          <ErrorsComponent></ErrorsComponent>
        </div>
      </UserContext.Provider>
    </PageContext.Provider>
  );
}

export default App;
