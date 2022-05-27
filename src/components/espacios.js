import React, { useState, useEffect } from "react";
import Cuartos from "./cuartos";
import FotoCasa from "../assets/casa.jpg";
import FotoApartamento from "../assets/apartamento.jpg";
import { FormattedMessage } from "react-intl";

function Espacios() {
  let [espacios, setEspacios] = useState([]);
  let [espacioSelec, setEspacioSelect] = useState();

  useEffect(() => {
    const urlAPI = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    fetch(urlAPI).then((res) => res.json())
                    .then((data) => {
                        setEspacios(data);
                        localStorage.setItem("espacios", JSON.stringify(data));
    });  
  }, []);

  function espacioSelect(espacio) {
    setEspacioSelect(espacio);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {espacios.map((e) => {
          return (
            <div className="col-3" key={e.id}>
              <div className="card" onClick={() => espacioSelect(e)}>
                <img
                  src={
                    String(e.name).startsWith("Casa")
                      ? FotoCasa
                      : FotoApartamento
                  }
                  className="card-img-top"
                  alt={e.name}
                  style={{ height: "15rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <FormattedMessage id={e.name} />
                  </h5>
                  <p className="card-text">{e.address}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {espacioSelec != null ? (
        <Cuartos espacioSelecionado={espacioSelec.id} />
      ) : null}
    </div>
  );
}

export default Espacios;
