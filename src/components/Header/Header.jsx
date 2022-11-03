import "./Header.css";
import Glass from "../../utils/glass.svg";
import Cart from "../../utils/cart.svg";

function Header({ isMobile }) {
  function getMobile() {
    return <div className="Header">Mobile</div>;
  }

  function getWeb() {
    return (
      <div className="Header">
        <div className="Name">
          <h1>SHPX</h1>
        </div>
        <div className="Tags">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Products</h1>
          <h1>Contact</h1>
        </div>
        <div className="Icons">
          <img src={Glass} alt="" />
          <img src={Cart} alt="" />
        </div>
      </div>
    );
  }

  return isMobile ? getMobile() : getWeb();
}

export default Header;
