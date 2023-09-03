
import { useState } from 'react';
import './App.css';

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [num, setNum] = useState(5);

  const giveRandom=()=>{
  setNum(Math.floor(Math.random()* (max-min +1)))
  }
  return (
    <div className="app">
    <div className='container'>
    <div className='randomNum'>
    <p>Random Number:  <span>{num}</span> </p>
    </div>
    <div className='numContainer'>
     <div>
      <p>Min:</p>
      <input type="number" value={min} onChange={e=>setMin(e.target.value)} />
     
     </div>
     <div>
      <p>Max:</p>
      <input type="number" value={max} onChange={e=>setMax(e.target.value)}/>
     
     </div>
    </div>
    <button onClick={giveRandom}>Get Random Number</button>
      </div>

    </div>
  );
}

export default App;
