import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './searchBar.jsx'
import HandlePost from './handlePost.jsx'
// import HandleDelete from './handleDelete.jsx'


function App() {
  // const movies = [
  //   {title: 'Mean Girls'},
  //   {title: 'Hackers'},
  //   {title: 'The Grey'},
  //   {title: 'Sunshine'},
  //   {title: 'Ex Machina'},
  // ];

  const [titles, setTitles] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/titles')
      .then(res => res.json())
      .then(data => {
        setTitles(data);
      })
    }, [])

  const addMovie = (input) => {
    input.preventDefault();
    HandlePost(newMovieTitle, setTitles);
    setNewMovieTitle('');  
  }

  return (
    <>
      <SearchBar 
      titles = {titles}/>
      {/* <HandleDelete 
      titles = {titles}/> */}
    
      <div>
      <form onSubmit={addMovie}>
        <input 
          type="text" 
          value={newMovieTitle} 
          onChange={(input) => setNewMovieTitle(input.target.value)} 
          placeholder="Enter movie title"
        />
        <button type="submit">Add Title</button>
      </form>
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
