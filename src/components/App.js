import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import '../styles/App.scss';
import { Homepage } from './Homepage';
import { Blog } from './Blog';
import { Navigation } from './Navigation';
import BlogPages from './BlogPages';

function App() {
  const markdownFiles = ['test', 'test2', 'README'];
  const routeMarkdownFiles = markdownFiles.map((file, index) =>
    <Route key={index} path={"blog/" + file} element={ <BlogPages post={file} /> } />
  );

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
            {routeMarkdownFiles}
          </Routes>
        </div>
      </div>
    </HashRouter>
    
  );
}

export default App;
