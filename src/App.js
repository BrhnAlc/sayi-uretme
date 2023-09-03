
import './App.css';

function App() {
  return (
    <div className="app">
    <div className='container'>
    <div className='randomNum'>
    <p>Random Number:  <span>5</span> </p>
    </div>
    <div className='numContainer'>
     <div>
      <p>Min:</p>
      <input type="number" />
     
     </div>
     <div>
      <p>Max:</p>
      <input type="number" />
     
     </div>
    </div>
    <button>Get Random Number</button>
      </div>

    </div>
  );
}

export default App;
