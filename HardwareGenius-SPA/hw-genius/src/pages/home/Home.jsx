import "./Home.scss";
import pic from "../../assets/images/content/header-arni.png";

const Home = () => {
  return (
    <div class="main-banner">
      <div class="content-text">
        <p class="h1">Реализуй самый смелый технический замысел, используя</p>
        <p class="h2">Конфигуратор</p>
        <p class="h5">
          Встроенный конфигуратор поможет подобрать комплектующие,проверит
          совместимость и актуальность. А еще он покажет производительность
          собранной системы в любимых играх и приложениях.
        </p>
      </div>
      <div class="image-cont">
        <img src={pic} className="arni" alt="pc" width="450" />
      </div>
    </div>
  );
};

export default Home;
