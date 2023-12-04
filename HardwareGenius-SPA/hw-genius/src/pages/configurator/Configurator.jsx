import "./Configurator.scss";
import Search from "../../components/catalog/Search";
import PriceSlider from "../../components/catalog/PriceSlider";
// import SelectFilters from "../../components/catalog/filters/SelectFilters";
import Filter from "../../components/catalog/filters/Filter";

const Configurator = () => {
  return (
    <div className="catalog">
      <div className="leftBlock">
        <div className="searchPanel">
          <Search />
        </div>
        <div className="pricePanel">
          <PriceSlider />
        </div>
        <div className="dropdownFilter">
          <Filter />
        </div>
      </div>
      <div className="pageList">
        <div className="topBlock">
          <div className="topFilters"></div>
          <div className="pickedFilters">{/* <SelectFilters /> */}</div>
        </div>
        <div className="productsList"></div>
      </div>
    </div>
  );
};

export default Configurator;
