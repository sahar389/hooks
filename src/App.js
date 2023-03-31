import { useState } from 'react';
import Filter from './component/Filter';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import Rating from './component/Rating';
import { moviesData } from './Data';


function App() {
  
  const[title,setTitle]=useState('');
  const[rating,setRating]=useState(0);
   const addMovie = (newMovie) => {
    console.log(newMovie);
    moviesData.push(newMovie);
  };
  
  return (
    <>
    <Filter title={title} setTitle={setTitle} />
    <Rating rating={rating} setRating={setRating}/>
    <MovieList moviesData={moviesData} title={title} setTitle={setTitle}/>
    <AddMovie addMovie={addMovie} />
    
    </>
      
    
  );
}

export default App;
