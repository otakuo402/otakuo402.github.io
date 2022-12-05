import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import './App.css';
import { Homepage } from './Homepage';
import { Blog } from './Blog';
import { Navigation } from './Navigation';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <div className='App-header'>
          <Navigation/>
        </div>
        <div className="App-body">
          <Routes>
            <Route path="/" element={ <Navigate to="/home" /> } />
            <Route path="blog" element={ <Blog/> } />
            <Route path="/home" element={ <Homepage/> } />
          </Routes>
        </div>
      </div>
    </HashRouter>
    
  );
}

export default App;
