import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Homepage } from './Homepage';
import { Blog } from './Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={ <Navigate to="/home" /> } />
          <Route path="blog" element={ <Blog/> } />
          <Route path="/home" element={ <Homepage/> } />
        </Routes>
      </header>
      
    </div>
  );
}

export default App;
