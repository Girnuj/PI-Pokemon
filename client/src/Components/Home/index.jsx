import React, { useEffect, useState } from 'react'
import Card from '../Cards'
import Navbar from '../Navbar'
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './Home.css'

import { getPokemons } from '../Redux/Actions';
import Pagination from '../Pagination';
import SearchBar from '../Searchbar';
import Loading from '../Loading';

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
 
  // const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons())
    .then( response => (setLoading(false)))
  }, [dispatch]);
 

  const [loading, setLoading]= useState(true)
  const [orden, setOrden]= useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [pokeXPage] = useState(8); 

  const IndexOfLast = pageNumber * pokeXPage;
  const IndexOfFirst = IndexOfLast - pokeXPage;
  const currentPages = pokemons.slice(IndexOfFirst, IndexOfLast);

  
  const paginate = pageNumber => setPageNumber(pageNumber) 


  return (
      <>
      <Navbar />
      {loading?(<>
        <div className='cards_container'>
      <Loading  />
        </div>

      </>):(
        <>
         <SearchBar />
      <div className='pagination'>
      <Pagination pokeXPage={pokeXPage} totalPoke={pokemons.length} paginate={paginate}/>
      </div>
      

      

         <div className='cards_container'>
          {currentPages && currentPages?.map( el => {
             return (
             <Card 
             id={el.id}
             name={el.name}
              attack={el.attack}
              types={el.types}
             image={el.image}
             />
             )
            })}
            </div>
        </>
        
      )}
      
     
     
      </>
  )
}

export default Home