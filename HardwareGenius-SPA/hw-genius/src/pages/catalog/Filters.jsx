import React, { useState, useEffect } from "react";

const Filters = ({ products, onFilterChange }) => {
  const [attributeNames, setAttributeNames] = useState([]);

  useEffect(() => {
    // Получаем все уникальные имена атрибутов из продуктов
    const uniqueAttributeNames = products.reduce((acc, product) => {
      product.attributeValues.forEach((attribute) => {
        if (!acc.includes(attribute.attributeNameId)) {
          acc.push(attribute.attributeNameId);
        }
      });
      return acc;
    }, []);

    // Устанавливаем уникальные имена атрибутов в состояние
    setAttributeNames(uniqueAttributeNames);
  }, [products]);

  const handleFilterChange = (event) => {
    // Получаем выбранное значение фильтра
    const selectedValue = event.target.value;

    // Вызываем функцию обратного вызова для обновления URL-параметров
    onFilterChange(selectedValue);
  };

  return (
    <div>
      <h3>Фильтры:</h3>
      {attributeNames.map((attributeNameId) => (
        <div key={attributeNameId}>
          <label>{getAttributeName(attributeNameId)}</label>
          <select onChange={handleFilterChange}>
            <option value="">Все</option>
            {getUniqueAttributeValues(products, attributeNameId).map(
              (value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            )}
          </select>
        </div>
      ))}
    </div>
  );
};

const getAttributeName = (attributeNameId) => {
  // Ваша логика для получения имени атрибута по идентификатору
  const attributeNames = {
    1: "Графический процессор",
    2: "Энергопотребление",
    3: "Объем видеопамяти",
    4: "Тип видеопамяти",
    5: "Количество ядер",
    6: "Частота",
    7: "Сокет",
    // Добавьте другие атрибуты по мере необходимости
  };

  return attributeNames[attributeNameId] || "Неизвестный атрибут";
};

const getUniqueAttributeValues = (products, attributeNameId) => {
  // Получаем уникальные значения для выбранного атрибута
  const uniqueValues = new Set();
  products.forEach((product) => {
    product.attributeValues.forEach((attribute) => {
      if (attribute.attributeNameId === attributeNameId) {
        uniqueValues.add(attribute.value);
      }
    });
  });

  return Array.from(uniqueValues);
};

export default Filters;
