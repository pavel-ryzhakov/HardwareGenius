import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="iconsPanel">
          <i className="fa fa-github" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <i class="fa fa-telegram" aria-hidden="true"></i>
        </div>
        <p>&copy; 2023 Ryzhakov</p>
      </div>
    </footer>
  );
};

export default Footer;
