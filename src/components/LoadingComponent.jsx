import React, { useContext } from 'react';
import PageContext from '../contexts/PageContext';

export default function LoadingComponent() {
  const PageState = useContext(PageContext);
  console.log(PageState);
  const { loading } = PageState.state;
  const { show, message } = loading;
  return <div>{show && <p>{message}</p>}</div>;
}
