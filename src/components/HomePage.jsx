import React, { useContext } from 'react';
import PageContext from '../contexts/PageContext';
import UserContext from '../contexts/UserContext';

export default function HomePage() {
  const userState = useContext(UserContext);
  const handlerSetLatlong = () =>
    userState.fncs.setLatLong({ latitude: 1000, longitude: -2000 });
  const pageState = useContext(PageContext);
  const handlerClick = () => pageState.showLoading('Carregando...');
  const stopLoading = () => pageState.stopLoading();
  const setTimeoutToShow = () => {
    pageState.showLoading('Iniciando a aplicação');
    setTimeout(() => {
      pageState.stopLoading();
    }, 3000);
  };

  const setError = () => {
    pageState.setError('Erro interno inesperado');
    setTimeout(() => {
      pageState.clearError();
    }, 2000);
  };

  return (
    <div>
      <h1>Bem Vindo!</h1>
      <button onClick={handlerClick}>Iniciar Loading</button>

      <button onClick={setTimeoutToShow}>Exibindo Loading Timeout</button>

      <button onClick={setError}>Mostrar erro</button>
      {pageState.state.loading.show && (
        <button onClick={stopLoading}>Parar Loading</button>
      )}

      <button onClick={handlerSetLatlong}>Setar Location</button>
    </div>
  );
}
