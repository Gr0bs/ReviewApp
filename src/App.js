import './App.css';
import Movie from './components/Movie';
import {useState, useEffect} from 'react'

const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=593c8d653b1a16b86f1128a7c53b6367&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=593c8d653b1a16b86f1128a7c53b6367&query='

function App() {


  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(searchTerm){
      getApi(SEARCH_API + searchTerm)
      setIsLoading(false)
    } else {
      getApi(FEATURED_API)
      setIsLoading(false)
    }
  },[searchTerm])


  const getApi = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setMovies(data.results)
    })
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  
  return (
    <div className="container">
    <header>
      <form>
        <input 
          className="search" 
          type="search" 
          placeholder="Spider-man" 
          onChange={handleOnChange}
        />
      </form>
    </header>
    <div className="movie__container">
      {!isLoading && movies.map(movie => (
        <Movie 
        key={movie.id} // IMPORTANT DE TOUJOURS METTRE UNE CLE UNIQUE
        {...movie}
        />
        ))}
        {isLoading && <div>Loading... </div>}
        </div>
    </div>
  );
}

export default App;
