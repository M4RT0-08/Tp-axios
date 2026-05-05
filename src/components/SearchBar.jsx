import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar películas..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}
