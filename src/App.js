import {React, useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'



const App = () => {
  const [characterList, setCharacterList] = useState([]);
  
  //grabbing the characters data
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacterList(res.data)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])
//done grabbing characters data
  

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
(    <div className="App">
      <h1 className="Header">The Rebellion</h1>
      {
        characterList.map(item=> {
          return <Character info = {item} key = {item.id}/>
        })
      }
    </div>)
  );
}

export default App;


//Use keys if you’re looping/mapping over data. key={fr.id} for instance for looping over fr.