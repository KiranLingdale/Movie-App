/* eslint-disable jsx-a11y/anchor-is-valid */
import './Cards.css';
import { Link } from "react-router-dom";

const Cards = (props) =>{
return(
  <Link style={{textDecoration:'none',color:'black'}} to={"/MovieDetails/" + props.imdbID
} >
<div>
<div className="container-fluid mx-auto mt-4">
  <div className="row">
    <div className="col-md-3">
      <div className="card" style={{width: '16rem',height: '23rem'}}>
        <img src={props.Poster} className="card-img-top mt-auto" alt="Poster"  style={{height:"15rem"}}  />
        <div className="card-body">
          <h6 className="card-title">{props.Title}</h6>
          <p className="card-text">{props.Type}</p>
        </div>
      </div>
    </div>    
           
              
  </div>
</div>

</div>
</Link>
);
}

export default Cards;

