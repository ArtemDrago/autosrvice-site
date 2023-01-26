import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainComponent from './components/MainComponent/MainComponent';
import './style/App.scss';

function App() {
  const [visible, setVisible] = useState(false)
  const [typeModal, setTypeModal] = useState('')

  return (
    <div className="page-container">
      <Routes>
        <Route
          path='/'
          element={
            <Header
              visible={visible}
              setVisible={setVisible}
              setTypeModal={setTypeModal}
            />
          } >
          <Route
            path='/'
            element={<MainComponent
              visible={visible}
              setVisible={setVisible}
              typeModal={typeModal}
              setTypeModal={setTypeModal}
            />}
          />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
