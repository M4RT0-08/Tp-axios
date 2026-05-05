import './ErrorMessage.css';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <div className="error-content">
        <p className="error-icon">⚠️</p>
        <p className="error-text">{message || 'Ocurrió un error al cargar las películas'}</p>
        {onRetry && (
          <button className="retry-btn" onClick={onRetry}>
            Reintentar
          </button>
        )}
      </div>
    </div>
  );
}
