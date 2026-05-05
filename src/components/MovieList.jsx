import MovieCard from './MovieCard';
import './MovieList.css';

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </div>
  );
}
