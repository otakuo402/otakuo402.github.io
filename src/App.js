import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import './App.css';
import { Homepage } from './Homepage';
import { Blog } from './Blog';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={ <Navigate to="/home" /> } />
            <Route path="blog" element={ <Blog/> } />
            <Route path="/home" element={ <Homepage/> } />
          </Routes>
        </header>
      </div>
    </HashRouter>
    
  );
}

export default App;
