import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import '../styles/App.scss';
import { Homepage } from './Homepage';
import { Blog } from './Blog';
import { Navigation } from './Navigation';
import BlogPages from './BlogPages';
import { useState } from 'react';

function App() {
  const [markdowns, setMarkdowns] = useState([]);

  fetch('/allFileNames.txt')
  .then((r) => r.text())
  .then(text  => {
    var array = text.split(/\r?\n/);
    array.pop();
    setMarkdowns(array)
  })
  .catch(err => console.log(err));
  
  const routeMarkdownFiles = markdowns.map((file, index) =>
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
