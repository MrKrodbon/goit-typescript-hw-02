const SearchBar = ({ onHandleSubmit }) => {
  const onFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target.elements;
    onHandleSubmit(form.text.value);
  };

  return (
    <>
      <header>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            name="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
