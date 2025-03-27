import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const movies = [
  //   {title: 'Mean Girls'},
  //   {title: 'Hackers'},
  //   {title: 'The Grey'},
  //   {title: 'Sunshine'},
  //   {title: 'Ex Machina'},
  // ];

  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/titles')
      .then(res => res.json())
      .then(data => {
        setTitles(data);
      })
    }, [])

  return (
    <>
      <div>
        <ul>
       {titles.map((movie, index) => ( 
       
         <li key ={movie.id} > {movie.title} </li> )
        )}
         </ul>
      </div>
     
    </>
  )
}

export default App
