import { useState, useEffect } from 'react'
import { SearchBar, MovieList, MovieDetail, Loader, ErrorMessage } from './components'
import { searchMovies, getPopularMovies, getMovieDetails } from './services/api'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    loadPopularMovies()
  }, [])

  const loadPopularMovies = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await getPopularMovies()
      const movies = response.data.Search || []
      setMovies(movies)
    } catch (err) {
      setError('Error al cargar las películas. Intenta de nuevo.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (value) => {
    setSearchTerm(value)
    setLoading(true)
    setError(null)

    if (value.trim() === '') {
      try {
        const response = await getPopularMovies()
        const movies = response.data.Search || []
        setMovies(movies)
      } catch (err) {
        setError('Error al cargar las películas.')
        console.error(err)
      }
    } else {
      try {
        const response = await searchMovies(value)
        const movies = response.data.Search || []
        setMovies(movies)
      } catch (err) {
        setError('Error en la búsqueda. Intenta de nuevo.')
        console.error(err)
      }
    }

    setLoading(false)
  }

  const handleSelectMovie = async (movieId) => {
    setLoading(true)
    try {
      const response = await getMovieDetails(movieId)
      setSelectedMovie(response.data)
    } catch (err) {
      setError('Error al cargar los detalles de la película.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCloseDetail = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Películas</h1>
        <SearchBar onSearch={handleSearch} />
      </header>

      <main className="app-main">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} onRetry={loadPopularMovies} />}
        {!loading && !error && movies.length > 0 && (
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        )}
        {!loading && !error && movies.length === 0 && (
          <div className="no-results">
            <p>No se encontraron películas</p>
          </div>
        )}
      </main>

      <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
    </div>
  )
}

export default App
