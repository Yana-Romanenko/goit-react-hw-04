import css from './SearchBar.module.css';
import {IoSearch} from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';


const SearchBar = ({ onSubmit }) => {
const handleSubmit = (event) => {
  event.preventDedault();
  const searchQuery = event.target.elements.searchQuery.value;

  if (!searchQuery.trim()) {
    toast.error('Please enter a search query!')
    return;
  }
  onSubmit(searchQuery);
};

return (
<header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>
<div className={css.searchBar}>
  <button type='submit' className={css.btn}>
  <IoSearch />
  </button>
  <label>
  <input className={css.input}
      type="text"
      name='searchQuery'
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </label>
</div>
    <Toaster position="top-center" />
  </form>
</header>
)
}

export default SearchBar;



