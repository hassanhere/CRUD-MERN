import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Data from './Data';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
