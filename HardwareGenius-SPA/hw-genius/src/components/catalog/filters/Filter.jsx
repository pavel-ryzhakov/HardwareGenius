import "./Filter.scss";
import {
  ReactiveBase,
  MultiDropdownList,
  ReactiveList,
  SelectedFilters,
} from "@appbaseio/reactivesearch";

const Filter = () => {
  return (
    <div class="filter">
      <ReactiveBase
        app="good-books-ds"
        url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
      >
        <div className="row">
          <div className="col">
            <MultiDropdownList
              componentId="BookSensor"
              dataField="original_series.keyword"
              aggregationSize={100}
            />
          </div>

          <div className="col">
            <SelectedFilters />
            <ReactiveList
              componentId="SearchResult"
              dataField="original_title"
              className="result-list-container"
              from={0}
              size={5}
              //renderItem={this.booksReactiveList}
              // react={{
              //   and: ["BookSensor"],
              // }}
            />
          </div>
        </div>
      </ReactiveBase>
    </div>
  );
};
export default Filter;
