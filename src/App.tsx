import { StrictMode } from 'react';
import Home from '@/pages/Home';
import Test from '@/pages/Test';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Link to="/home" style={{ marginRight: '20px' }}>
              home
            </Link>
            <Link to="/test">test</Link>
          </div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
};

export default App;
