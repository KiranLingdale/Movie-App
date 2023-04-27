import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

const MovieDetails = () =>{
    const [movieDetails, setMovieDetails] = useState();
    const{id} = useParams();

    useEffect(()=>{
        getMovieDetails();
    })

   async function getMovieDetails(){
      const data = await fetch( `https://www.omdbapi.com/?i=${id}&apikey=4f67e215`)  
      const json = await data.json();
      setMovieDetails(json);

    }

    return(
        <div>
            {
                !movieDetails?(null):(
                    <img src={movieDetails.Poster} alt="Poster" />
                )
            }
        </div>
    );
}

export default MovieDetails;

// {!movieData? (
//     <h1>No data found</h1>
//   ) : (
//     movieData.map((data)=>{
//       return <Cards {...data} key={data.imdbID} />
//     })
//   )
   
//   }