import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
        <Route path="/todolist" element={<HomePage/>}/>
      </Routes>
    </Provider>
    </>
  );
}

export default App;
