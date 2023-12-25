import "./PriceSlider.scss";
import { ReactiveBase, RangeInput } from "@appbaseio/reactivesearch";
const PriceSlider = () => {
  return (
    <div className="priceSlider">
      <p>Цена</p>
      <ReactiveBase
        app="good-books-ds"
        url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
      >
        <div className="row">
          <div className="col">
            {/* <RangeInput
              dataField="ratings_count"
              componentId="PriceRange"
              range={{
                start: 0,
                end: 125678,
              }}
              rangeLabels={{
                start: 0,
                end: 125678,
              }}
              URLParams
            /> */}

            <RangeInput
              componentId="PriceRange"
              compoundClause="filter"
              dataField="rating"
              title=""
              range={{
                start: 6567,
                end: 20000,
              }}
              defaultValue={{
                start: 0,
                end: 100,
              }}
              rangeLabels={{
                start: "",
                end: "",
              }}
              showFilter={true}
              stepValue={1}
              showHistogram={false}
              interval={2}
              react={{
                and: ["CategoryFilter", "SearchFilter"],
              }}
              URLParams
              includeNullValues
              endpoint={{
                url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io/recipes-demo/_reactivesearch.v3", //mandatory
                headers: {
                  // relevant headers
                },
                method: "POST",
              }}
            />
          </div>
        </div>
      </ReactiveBase>
    </div>
  );
};

export default PriceSlider;
