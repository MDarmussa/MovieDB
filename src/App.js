import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect } from "react";

function App() {

  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US")
    console.log(res.data.results)
  }

  useEffect(() => {
    getAllMovies()
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Container>
          <MoviesList />
      </Container>
    </div>
  );
}

export default App;
