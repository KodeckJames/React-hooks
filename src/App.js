import './App.css';
import { useState, useEffect } from 'react';
//Everything in the callbck function in the useEffect hook will execute every time our app renders
//It takes a second parameter which is a dependency array, which allows the page to only re render when a specific resource on your page changes
//The return statement in the useState function is used as a cleanup as when the code in the useEffect is executed, the code in the return is run first then the code above it, to "clean up" what we did the last time


function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleSize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
    
  // }, [resourceType]);

  return (
    <div>
      {windowWidth}
    </div>
    // <>
    // <div className='flex flex-1 '>
    //   <button className='bg-gray-500 p-4 rounded text-black' onClick={()=>setResourceType('Posts')}>Posts</button>
    //   <button className='bg-gray-500 p-4 rounded text-black' onClick={()=>setResourceType('Users')}>Users</button>
    //   <button className='bg-gray-500 p-4 rounded text-black' onClick={()=>setResourceType('Comments')}>Comments</button>
    // </div>
    //   <h1>{resourceType}</h1>   
    //   {items.map(item => {
    //     return <pre>{JSON.stringify(item)}</pre>
    // })}  
    // </>
  );
}

export default App;
