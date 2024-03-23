import css from './SearchBar.module.css';
import {IoSearch} from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';


const SearchBar = ({ onSubmit }) => {
const handleSubmit = (event) => {
  event.preventDefault();
  const searchQuery = event.target.elements.searchQuery.value;

  if (!searchQuery.trim()) {
    toast.error('Please enter a search query!')
    return;
  }
  onSubmit(searchQuery);
};

return (
<header className={css.header}>
  <form onSubmit={handleSubmit} className={css.searchBar}>
  <button type='submit' className={css.btn}>
  <IoSearch />
  </button>
  <input className={css.input}
      type="text"
      name='searchQuery'
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <Toaster position="top-center" />
  </form>
</header>
)
}

export default SearchBar;



