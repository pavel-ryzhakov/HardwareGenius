import "./Search.scss";

const Search = () => {
  return (
    <div className="searchString">
      <p>Поиск по каталогу</p>
      <form>
        <input
          type="text"
          id="search"
          name="SearchTerm"
          placeholder="Поиск..."
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Search;
