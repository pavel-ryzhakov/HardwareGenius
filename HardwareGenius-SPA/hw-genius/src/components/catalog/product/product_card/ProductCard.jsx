import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const concretePath = product.imgUrl;
  let splitPath = concretePath.split("Data");
  const sortedAttributes = [...product.attributeValues].sort((a, b) =>
    a.id.localeCompare(b.id)
  );
  return (
    <div className="product-container">
      <img src={splitPath[1]} alt={product.model} />
      <div class="info-container">
        <div class="name-container">
          <p>{product.model}</p>
          <p class="model">
            <ul>
              {product.attributeValues.map((attribute) => (
                <li key={attribute.id}>
                  {getAttributeName(attribute.attributeNameId)}:{" "}
                  {attribute.value}
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <div class="cart-container">
        <p class="price-container">{product.price} ₽</p>
        <div class="like-container">
          <button class="button add-cart">В корзину</button>
        </div>
      </div>
    </div>
  );
};
// Вспомогательная функция для получения имени атрибута по его идентификатору
const getAttributeName = (attributeNameId) => {
  // Ваша логика для получения имени атрибута по идентификатору
  // Например, можно иметь объект соответствия id и имен атрибутов
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

  return attributeNames[attributeNameId] || "nothing";
};

export default ProductCard;
