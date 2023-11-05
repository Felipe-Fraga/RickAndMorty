import { Game } from './components/Gane';
import { Home } from './components/Home';
import { Intro } from './components/Intro';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='h-[100%]'>
      <Routes>
        <Route>
          <Route path="/" element={<Intro />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
