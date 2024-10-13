import css from "./SearchBar.module.css";

const SearchBar = ({ onHandleSubmit }) => {
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target.elements;
    onHandleSubmit(form.text.value);
  };

  return (
    <>
      <header>
        <form onSubmit={onFormSubmit} className={css.form}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.searchField}
          />
          <button type="submit" className={css.submitBtn}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
