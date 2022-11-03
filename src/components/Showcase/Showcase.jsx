import "./Showcase.css";
import Room_2 from "../../utils/room_2.svg";
import Left from "../../utils/left_arrow.svg";
import Right from "../../utils/right_arrow.svg";

function Showcase({ isMobile }) {
  function getMobile() {
    return <div className="Showcase">Mobile</div>;
  }

  function getWeb() {
    return (
      <div className="Showcase">
        <div className="ShowcaseContents">
          <img src={Room_2} alt="" />
          <div className="Textbox">
            <h1>Showcase</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
              eleifend viverra nam libero tellus. Luctus ornare ac, dolor tempor
              pellentesque nec.
            </p>
            <div className="Buttons">
              <div className="Arrow">
                <img src={Left} alt="" />
              </div>
              <div className="Arrow">
                <img src={Right} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return isMobile ? getMobile() : getWeb();
}

export default Showcase;
