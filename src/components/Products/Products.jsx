import { useState } from "react";
import "./Products.css";
import Chair_1 from "../../utils/chair_1.svg";
import Chair_2 from "../../utils/chair_2.svg";
import Chair_3 from "../../utils/chair_3.svg";
import Sofa from "../../utils/sofa.svg";
import Lamp from "../../utils/lamp.svg";
import Table from "../../utils/table.svg";

function Products({ isMobile }) {
  const [type, setType] = useState("All");

  function getProducts() {
    const list = [];
    switch (type) {
      case "Lamp":
        list.push(<img key={"Lamp"} src={Lamp} alt="" />);
        break;
      case "Table":
        list.push(<img key={"Table"} src={Table} alt="" />);
        break;
      case "Sofa":
        list.push(<img key={"Sofa"} src={Sofa} alt="" />);
        break;
      case "Chair":
        list.push(<img key={"Chair_1"} src={Chair_1} alt="" />);
        list.push(<img key={"Chair_2"} src={Chair_2} alt="" />);
        list.push(<img key={"Chair_3"} src={Chair_3} alt="" />);
        break;
      default:
        list.push(<img key={"Chair_1"} src={Chair_1} alt="" />);
        list.push(<img key={"Chair_2"} src={Chair_2} alt="" />);
        list.push(<img key={"Lamp"} src={Lamp} alt="" />);
        list.push(<img key={"Chair_3"} src={Chair_3} alt="" />);
        list.push(<img key={"Table"} src={Table} alt="" />);
        list.push(<img key={"Sofa"} src={Sofa} alt="" />);
        break;
    }
    return list;
  }

  function getMobile() {
    return <div className="Products">Mobile</div>;
  }

  function getWeb() {
    return (
      <div className="Products">
        <div className="Label">
          <h1>Products</h1>
        </div>
        <div className="Types">
          <h2
            className={type === "All" ? "Black" : "Gray"}
            onClick={() => setType("All")}
          >
            All
          </h2>
          <h2
            className={type === "Lamp" ? "Black" : "Gray"}
            onClick={() => setType("Lamp")}
          >
            Lamp
          </h2>
          <h2
            className={type === "Chair" ? "Black" : "Gray"}
            onClick={() => setType("Chair")}
          >
            Chair
          </h2>
          <h2
            className={type === "Table" ? "Black" : "Gray"}
            onClick={() => setType("Table")}
          >
            Table
          </h2>
          <h2
            className={type === "Sofa" ? "Black" : "Gray"}
            onClick={() => setType("Sofa")}
          >
            Sofa
          </h2>
        </div>
        <div className="ProductPictures">{getProducts()}</div>
      </div>
    );
  }

  return isMobile ? getMobile() : getWeb();
}

export default Products;
