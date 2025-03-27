import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <>
      <div>
        <ul>
       {movies.map((movie, index) => ( 
         <li key ={index} > {movie.title} </li> )
        )}
         </ul>
      </div>
     
    </>
  )
}

export default App
