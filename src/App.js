import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Friends from './Pages/Friends/Friends';
import RefferEarn from './Pages/Reffers/RefferEarn';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('second');
  return (
    <div className="App">
      <Navbar />
      <div className='route'>
        <p><a href="">UI/Ux</a> {'>'}  
        <p style={{display:'inline-block',cursor:'pointer'}} onClick={() => setPage('second')}> Refer & Earn</p> <a href="" style={page==='second'?{ display:'none'}: {display:'inline-block'}}>{'>'} Friends Reffered</a></p>
      </div>
      
      {page === "second" && <RefferEarn page={page} setPage={setPage}/>}
      {page === "first" && <Friends setPage={setPage}/>}

    </div>
  );
}

export default App;
