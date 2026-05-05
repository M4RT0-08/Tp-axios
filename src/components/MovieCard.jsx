import './MovieCard.css';

export default function MovieCard({ movie, onSelectMovie }) {
  return (
    <div className="movie-card" onClick={() => onSelectMovie(movie.imdbID)}>
      <img
        src={
          movie.Poster && movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/300x450?text=No+Image'
        }
        alt={movie.Title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p className="release-date">{movie.Year}</p>
        <p className="rating">Tipo: {movie.Type}</p>
      </div>
    </div>
  );
}
