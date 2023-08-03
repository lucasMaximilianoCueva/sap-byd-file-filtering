import BannerImage from "../Assets/sap-business-bydesign.png";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar";
import React from "react";
import axios from "axios";
import { Link } from "@mui/material";

const Home = () => {
  const baseUrl = "http://localhost:5000/api";
  const pointer = {cursor: 'pointer'};

  const [fileUpdated, setFileUpdated] = React.useState(false);
  const [startProcess, setStartProcess] = React.useState(false);

  const startProcessWithButton = () => {
    setStartProcess(true)
    // setFileUpdated(true);
    axios.post(baseUrl).then((response) => {
      setFileUpdated(true);
      console.log("listo para descargar")
    });
  }

  let button;
  if (!startProcess) {
    button = (
      <button className="secondary-button" onClick={startProcessWithButton}>
        Filtrar lista <FiArrowRight />{" "}
      </button>
    );
  } else {
    button = <p>Procesando..</p>;
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Descargar archivo(.txt) Padrones filtrado
          </h1>
          <p className="primary-text">
            Luego de filtrar los registros innecesarios se generará un nuevo
            archivo para luego ser cargado en el sistema SAP Business ByDesign.
          </p>
          {fileUpdated ? (
            <p>Ya podés descargar el archivo haciendo click <Link href="http://localhost:5000/api/download" style={pointer}>aquí</Link></p>
          ) : (
            button
          )}
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;