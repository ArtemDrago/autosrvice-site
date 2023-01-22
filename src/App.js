import { Route, Routes } from 'react-router-dom';
import MainComponent from './components/MainComponent/MainComponent';
import './style/App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<MainComponent />}
        />
      </Routes>

    </div>
  );
}

export default App;
