/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import Cards from "./Cards";


const Body = () => {
  const [searchValue, setSearchValue] = useState("marvel");
  const [movieData, setMovieData] = useState([]);


  useEffect(() => {
    getMovieDetails();
  }, []);
   
  async function getMovieDetails() {
    const data = await fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=4f67e215`
    );
    const json = await data.json();
    setMovieData(json.Search);
    console.log(movieData)
    
  }
  function onChangeSearch(event){
    const val = event.target.value
    setSearchValue(val)
  }

  function onSubmitSearch(e){
e.preventDefault()
    getMovieDetails();
    console.log('clicked')
  }
  return (
    <div className="container-fluid  bg-dark text-white">
      <div className="d-flex justify-content-between" style={{marginLeft:"1rem"}}>
      <form className="d-flex" style={{margin:'1em 2em 0 0 ' ,height:'3rem', width:'40%'}} role="search" onSubmit={onSubmitSearch}> 
        <input
          className="form-control me-3 btn btn-outline-light col-xs-4" 
          type="search"
          value={searchValue}
          onChange={onChangeSearch}
        />
        <button className="btn btn-outline-light btn-dark" type="submit">
          Search
        </button >
      </form>
     
     
      </div>
      <div className="body-cards" style={{marginLeft:'1rem'}} >
        {!movieData? (
          <h1>No data found</h1>
        ) : (
          movieData.map((data)=>{
            return <Cards {...data} key={data.imdbID} />
          })
        )
         
        }
      </div>

    </div>
  );
};

export default Body;
