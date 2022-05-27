import React, { useState, useEffect } from "react";
import FotoSala from "../assets/living room.jpg";
import FotoComedor from "../assets/dining room.jpg";
import FotoCocina from "../assets/kitchen.jpg";
import { FormattedMessage } from 'react-intl';
import Dispositivos from "./dispositivos";

function Cuartos (props) {
    
    let [cuartos, setCuartos] = useState([]);
    let [cuartoSelec, setCuartoSelect] = useState();

    useEffect(() => {
        const urlAPI = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
        fetch(urlAPI).then((res) => res.json()).then((data) => {
            let cuartosEspacio = data.filter((d) => d.homeId === props.espacioSelecionado);
            setCuartos(cuartosEspacio);
            localStorage.setItem("cuartos", JSON.stringify(cuartosEspacio));
        });
        setCuartoSelect();
    }, [props.espacioSelecionado]);

    function cuartoSelect (cuarto) {
        setCuartoSelect(cuarto);
    }

    function imagenCuarto (cuarto) {
        if(cuarto === "Living room") {
            return FotoSala;
        } else if(cuarto === "Kitchen") {
            return FotoCocina;
        } else if(cuarto === "Dinner room") {
            return FotoComedor;
        }
    }

    return(
        <div className="container mt-4 mb-5">
            <h1><FormattedMessage id="Rooms"/></h1>
            <div className="row mt-4">
                <div className={cuartoSelec != null ? "col-8": ""}>
                    <div className="row">
                        {cuartos.map((c) => {
                            return(
                                <div className="col" key={c.name}>
                                    <div className="card" onClick={() => cuartoSelect(c)}>
                                        <div className="card-body">
                                            <h5 className="card-title"><FormattedMessage id={c.name}/></h5>
                                        </div>
                                        <img src={imagenCuarto(String(c.name))} class = "responsive" className="card-img-top" alt={c.name} style={{height: "14rem"}}/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cuartoSelec != null ? "col-4": ""}>
                    {cuartoSelec != null ? <Dispositivos dispositivosCuarto={cuartoSelec.devices} /> : null}
                </div>
            </div>
        </div>
    );
}


export default Cuartos;