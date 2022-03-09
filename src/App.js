import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {

  const[results,setResults] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://breakingbadapi.com/api/characters?limit=12').then(data => data.json()).then(res => {
      setResults(res);
    })
  },[]);

  const handleChange = (e) => {
      setSearchTerm(e.target.value);
      fetch(`https://breakingbadapi.com/api/characters?name=${searchTerm}`).then(data => data.json()).then(res => {
      setResults(res);
    })
  }

  const handleClick = () => {
    fetch('https://breakingbadapi.com/api/characters').then(data => data.json()).then(res => {
      setResults(res);
    })
  }

  return (
    <div className="App">
      <img src="https://wallpaperaccess.com/full/5840974.jpg" className='logo'/>
      <input type="text" placeholder='Search Characters' value={searchTerm} onChange={(e) => handleChange(e)}/>
      <button className='refresh-button button-1' onClick={handleClick}>Refresh All Characters</button>
      <div className='results'>
        {results != null ? <Card results={results}/> : ''}
      </div>
    </div>
  );
}

export default App;
