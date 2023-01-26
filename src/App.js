import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainComponent from './components/MainComponent/MainComponent';
import { ModalContext } from './context/context';
import './style/App.scss';

function App() {
  const [visible, setVisible] = useState(false)
  const [typeModal, setTypeModal] = useState('')

  return (
    <ModalContext.Provider value={{
      visible,
      setVisible,
      typeModal,
      setTypeModal
    }}>
      <div className="page-container">
        <Routes>
          <Route
            path='/'
            element={
              <Header />
            } >
            <Route
              path='/'
              element={<MainComponent />}
            />

          </Route>
        </Routes>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
