import './MovieDetail.css';

export default function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="movie-detail-overlay" onClick={onClose}>
      <div className="movie-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="detail-container">
          <img
            src={
              movie.Poster && movie.Poster !== 'N/A'
                ? movie.Poster
                : 'https://via.placeholder.com/300x450?text=No+Image'
            }
            alt={movie.Title}
            className="detail-poster"
          />

          <div className="detail-content">
            <h1>{movie.Title}</h1>
            {movie.Year && <p className="tagline">({movie.Year})</p>}

            <div className="detail-info">
              {movie.Year && <p><strong>Año:</strong> {movie.Year}</p>}
              {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                <p><strong>Calificación:</strong> ⭐ {movie.imdbRating}/10</p>
              )}
              {movie.Runtime && movie.Runtime !== 'N/A' && (
                <p><strong>Duración:</strong> {movie.Runtime}</p>
              )}
              {movie.Type && movie.Type !== 'N/A' && (
                <p><strong>Tipo:</strong> {movie.Type}</p>
              )}
            </div>

            <div className="overview">
              <h3>Sinopsis</h3>
              <p>{movie.Plot && movie.Plot !== 'N/A' ? movie.Plot : 'No hay descripción disponible'}</p>
            </div>

            {movie.Director && movie.Director !== 'N/A' && (
              <div className="genres">
                <strong>Director:</strong>
                <p>{movie.Director}</p>
              </div>
            )}

            {movie.Actors && movie.Actors !== 'N/A' && (
              <div className="genres">
                <strong>Actores:</strong>
                <p>{movie.Actors}</p>
              </div>
            )}

            {movie.Genre && movie.Genre !== 'N/A' && (
              <div className="genres">
                <strong>Géneros:</strong>
                <div className="genre-list">
                  {movie.Genre.split(', ').map((genre, index) => (
                    <span key={index} className="genre-tag">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
