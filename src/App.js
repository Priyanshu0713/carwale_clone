import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage_carwale from './js_files/homepage_carwale';
import './css_files/homepage_carwale.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage_carwale />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
