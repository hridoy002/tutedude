import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Friends from './Pages/Friends/Friends';
import RefferEarn from './Pages/Reffers/RefferEarn';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('first');
  return (
    <div className="App">
      <Navbar />
      <div className='route'>
        <p><a href="">UI/Ux</a> {'>'}  
        <a href='#' onClick={() => setPage('second')}> Refer & Earn</a> <a href="" style={page==='second'?{ display:'none'}: {display:'inline-block'}}>{'>'} Friends Reffered</a></p>
      </div>
      {page === "first" && <Friends />}
      {page === "second" && <RefferEarn />}

    </div>
  );
}

export default App;
