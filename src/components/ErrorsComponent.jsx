import React, { useContext } from 'react';
import PageContext from '../contexts/PageContext';

export default function ErrorsComponent() {
  const pageContext = useContext(PageContext);
  const { error } = pageContext.state;
  const { show, message } = error;
  return (
    <div>
      <div style={{ width: '100%', backgroundColor: 'red' }}>
        <p>{message}</p>
      </div>
    </div>
  );
}
