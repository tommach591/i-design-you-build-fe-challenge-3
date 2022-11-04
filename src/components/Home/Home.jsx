import "./Home.css";
import Room_1 from "../../utils/room_1.svg";

function Home({ isMobile }) {
  function getMobile() {
    return (
      <div className="Home">
        <div className="Picture">
          <div className="Description">
            <h1>Modern Interior</h1>
            <h1>for your</h1>
            <h1>Dream House</h1>
            <p>We custom make design to suits your needs.</p>
          </div>
          <img className="Room_1" src={Room_1} alt="" />
          <div className="Background_1" />
        </div>
      </div>
    );
  }

  function getWeb() {
    return (
      <div className="Home">
        <div className="Picture">
          <div className="Description">
            <h1>Modern Interior</h1>
            <h1>for your</h1>
            <h1>Dream House</h1>
            <p>We custom make design to suits your needs.</p>
          </div>
          <img className="Room_1" src={Room_1} alt="" />
          <div className="Background_1" />
        </div>
      </div>
    );
  }

  return isMobile ? getMobile() : getWeb();
}

export default Home;
