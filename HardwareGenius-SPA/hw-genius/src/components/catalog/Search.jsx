import "./Search.scss";

const Search = () => {
  return (
    <div class="searchString">
      <p>Поиск по каталогу</p>
      <form>
        <input type="text" id="search" name="searh" placeholder="Поиск..." />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Search;
