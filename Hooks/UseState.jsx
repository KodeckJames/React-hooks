import './App.css';
import react, { useState } from 'react';


function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('Purple');
  const add=()=>{
    setCount(prevcount => prevcount + 1)
  }
  const subtract=()=>{
    setCount(prevcount => prevcount - 1)
    
  }

  return (
    <div className='flex flex-1 justify-center items-center h-screen'>
      <button className='bg-blue-500 p-4 rounded text-white' onClick={add}>+</button>
      <span className=' p-2 font-bold text-xl'>{count}</span>
      <span className=' p-4'>{theme}</span>
      <button className='bg-blue-500 p-4 rounded text-white' onClick={subtract}>-</button>
    </div>
  );
}

export default App;
