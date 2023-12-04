import "./SelectFilters.scss";
import {
  ReactiveBase,
  SelectedFilters,
  MultiDataList,
} from "@appbaseio/reactivesearch";

const SelectFilters = () => {
  return (
    <div className="selFilter">
      <ReactiveBase
        app="meetup_app"
        url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
      >
        <div className="row">
          <div className="col">
            <MultiDataList
              title="MultiDataList"
              componentId="CitySensor"
              dataField="group.group_topics.topic_name_raw.keyword"
              data={[
                { label: "Open Source", value: "Open Source" },
                { label: "Social", value: "Social" },
                { label: "Adventure", value: "Adventure" },
                { label: "Music", value: "Music" },
              ]}
            />
          </div>
          <div className="col2">
            <SelectedFilters />
          </div>
        </div>
      </ReactiveBase>
    </div>
  );
};

export default SelectFilters;
