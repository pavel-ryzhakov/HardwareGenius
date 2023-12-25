// ProductAttributes.js
import React from "react";

const ProductAttributes = ({ attributes }) => {
  // Задаем порядок атрибутов
  const attributeOrder = [
    "Графический процессор",
    "Энергопотребление",
    "Объем видеопамяти",
    "Тип видеопамяти",
    "Количество ядер",
    "Частота",
    "Сокет",
  ];

  // Сортируем атрибуты в соответствии с порядком
  const sortedAttributes = attributeOrder.map((attributeName) => ({
    name: attributeName,
    value:
      attributes.find((attr) => attr.name === attributeName)?.value ||
      "Не указано",
  }));

  return (
    <div>
      <h3>Характеристики:</h3>
      <ul>
        {sortedAttributes.map((attribute) => (
          <li key={attribute.name}>
            <strong>{attribute.name}:</strong> {attribute.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductAttributes;
