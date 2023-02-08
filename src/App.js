import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Index from './components/Home/index';
import NotFound from './components/NotFound';
import Tmatches from './components/TeamMatches';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Index />} />
      <Route exact path='/team-matches/:id' element={<Tmatches />} />
      <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
