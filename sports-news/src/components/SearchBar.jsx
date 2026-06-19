import {FiSearch} from 'react-icons/fi';
import "./style/SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <FiSearch className="search-icon"/>
      <input
        type="text"
        placeholder="Search articles..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;