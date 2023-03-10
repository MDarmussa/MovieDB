import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

//useParams is a hook in react-router-dom that take all parameters in URLs

function MovieDetails() {
     const param = useParams();
     console.log(param.id)

     const[movie, setMovie] = useState([])

     const getMovieDetails = async () => {
          const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US`)
          setMovie(res.data)
     }

     useEffect(() => {
          getMovieDetails();
     }, [])

  return (
    <div>
     <Row className="justify-content-center">
          <Col md="12" xs="12" sm="12" className="mt-4 ">
               <div className="card-detalis  d-flex align-items-center ">
                    <img
                         className="img-movie w-30"
                         src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                         alt="anything"
                    />
                    <div className="justify-content-center text-center  mx-auto">
                         <p className="card-text-details border-bottom">
                              Movie Name: {movie.title}
                         </p>
                         <p className="card-text-details border-bottom">
                              Released :{movie.release_date}
                         </p>
                         <p className="card-text-details border-bottom">
                              Votes: {movie.vote_count}
                         </p>
                         <p className="card-text-details border-bottom">
                              Reviews:{movie.vote_average}
                         </p>
                    </div>
               </div>
          </Col>
     </Row>

     <Row className="justify-content-center">
          <Col md="12" xs="12" sm="12" className="mt-1 ">
               <div className="card-story  d-flex flex-column align-items-start">
                    <div className="text-end p-4 ">
                         <p className="card-text-title border-bottom">Story: </p>
                    </div>
                    <div className="text-end px-2">
                         <p className="card-text-story">{movie.overview}</p>
                    </div>
               </div>
          </Col>
     </Row>

     <Row className="justify-content-center">
          <Col
               md="10"
               xs="12"
               sm="12"
               className="mt-2 d-flex justify-content-center ">
               <Link to="/">
                    <button
                         style={{ backgroundColor: "#b45b35", border: "none" }}
                         className="btn btn-primary mx-2">
                         Go to Home Page
                    </button>
               </Link>
               <a href={movie.homepage} target="_blank" >
                    <button
                         style={{ backgroundColor: "#b45b35", border: "none" }}
                         className="btn btn-primary">
                    Watch Movie
                    </button>
               </a>
          </Col>
     </Row>

   </div>
  )
}

export default MovieDetails