import { useState } from 'react';
import Filter from './component/Filter';
import MovieList from './component/MovieList';
import Rating from './component/Rating';
import { moviesData } from './Data';


function App() {
  
  const[title,setTitle]=useState('');
  const[rating,setRating]=useState('');
  
  return (
    <>
    <Filter title={title} setTitle={setTitle} />
    <Rating rating={rating} setRating={setRating}/>
    <MovieList moviesData={moviesData} title={title} setTitle={setTitle}/>
    
    </>
      
    
  );
}

export default App;
