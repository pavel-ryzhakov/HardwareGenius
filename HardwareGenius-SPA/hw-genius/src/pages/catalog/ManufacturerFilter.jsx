import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./ManufacturerFilter.scss";

const ManufacturerFilter = ({ products }) => {
  const [manufacturerNames, setManufacturerNames] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueNames = Array.from(
      new Set(products.map((product) => product.manufacturerName))
    );
    setManufacturerNames(uniqueNames);
  }, [products]);

  useEffect(() => {
    const selectedNamesFromUrl = searchParams.getAll("ManufacturerNamesList");
    setSelectedNames(selectedNamesFromUrl);
  }, [searchParams]);

  const handleCheckboxChange = (name) => {
    setSelectedNames((prevNames) => {
      if (prevNames.includes(name)) {
        return prevNames.filter((prevName) => prevName !== name);
      } else {
        return [...prevNames, name];
      }
    });
  };

  const handleApplyFilter = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("ManufacturerNamesList");
    selectedNames.forEach((name) => {
      newSearchParams.append("ManufacturerNamesList", name);
    });
    navigate({
      search: newSearchParams.toString(),
    });
  };

  return (
    <div>
      <p>Производитель</p>
      {manufacturerNames.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {manufacturerNames.map((name) => (
            <li key={name}>
              <label htmlFor={name}>{name}</label>
              {/* <label htmlFor={name} className="checkbox-label"></label> */}
              <input
                type="checkbox"
                id={name}
                value={name}
                checked={selectedNames.includes(name)}
                onChange={() => handleCheckboxChange(name)}
              />
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleApplyFilter}>Применить</button>
    </div>
  );
};

export default ManufacturerFilter;
