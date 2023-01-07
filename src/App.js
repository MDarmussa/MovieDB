import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  //step 3 - save our data in useState
  const[movies, setMovies] = useState([])

  //step 11- save how many page in useState (dynamic) - it will be exported as a prop to MoviesList then to Pagination.js
  const[pageCount, setPageCount] = useState(0)

  //step 1 - get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US")
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
    console.log('line 20', res.data.total_pages)
  }

  //  step 9 - "get current page" using pagination using axios to export it to MoviesList then to its child (Pagination.js)
   const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US&page=${page}`)
    setMovies(res.data.results)
    setPageCount(res.data.total_pages)
  }

  //step 2
  useEffect(() => {
    getAllMovies();
  }, [])
  
  //step 6 - get all movie by search using axios then export it as a prop to <NavBar /> 
  //Note: the way how search work:
    //take the user input(word) from onSearch in navBar and inject it in the URL (${word}) then add it in the setState(setMovies) and give you the result 
  const search = async(word) => {
    //if statement, extra feature to bring the movies back on the screen if you remove the user input
    if(word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US&query=${word}`)
      setMovies(res.data.results)
      setPageCount(res.data.total_pages)
    }
  }

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
          <MoviesList movies={movies} getPage={getPage} pageCount={pageCount} />
      </Container>
    </div>
  );
}

export default App;
