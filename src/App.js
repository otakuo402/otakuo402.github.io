import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Homepage } from './Homepage';
import { Blog } from './Blog';

function App() {
  return (
    <BrowserRouter history={window.history} basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={ <Navigate to="/home" /> } />
            <Route path="blog" element={ <Blog/> } />
            <Route path="/home" element={ <Homepage/> } />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
