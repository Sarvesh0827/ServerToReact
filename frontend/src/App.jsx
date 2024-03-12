import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes,SetJokes]= useState([]);

  useEffect(()=>{
    axios.get(`/api/jokes`)
    .then((response)=>{
      SetJokes(response.data);
    }).catch((err)=>{
      console.log('Error', err);
    })
  })

  return (
    <>
      <h1>Hello Backend to  Frontend Communication!</h1>
      <p>Jokes:{jokes.length}</p>
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}
   
export default App
