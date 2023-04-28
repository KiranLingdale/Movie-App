import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails();
  });

  async function getMovieDetails() {
    const data = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=4f67e215`
    );
    const json = await data.json();
    setMovieDetails(json);
  }
  if (!movieDetails) {
    return <h1>No data</h1>;
  }
  return (
    <>
      <div className="bg-dark text-white" style={{ marginLeft: "2rem" }}>
        <img src={movieDetails.Poster} alt="Poster" />
        <p>Title : {movieDetails.Title}</p>
        <p>Year: {movieDetails.Year}</p>
        <p>Rated: {movieDetails.Rated}</p>
        <p>Released: {movieDetails.Released}</p>
        <p>Runtime: {movieDetails.Runtime}</p>
        <p>Gerne: {movieDetails.Director}</p>
        <div style={{ width: "15rem" }}></div>
        {MovieDetails.Ratings &&
          MovieDetails.Ratings.map((rating) => (
            <p>
              {rating.Source} = {rating.Value}
            </p>
          ))}
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <button className="btn mr-2">Go back</button>
        </Link>
      </div>
    </>
  );
};

export default MovieDetails;
