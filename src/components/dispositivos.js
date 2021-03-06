import React from "react";
import { FormattedMessage } from "react-intl";

function Dispositivos(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            <FormattedMessage id="Id" />
          </th>
          <th scope="col">
            <FormattedMessage id="Device" />
          </th>
          <th scope="col">
            <FormattedMessage id="Value" />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.dispositivosCuarto.map((d, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{d.id !== undefined ? d.id : "NA"}</td>
              <td>{<FormattedMessage id={d.name} />}</td>
              <td>
                {d.desired.value !== false &&
                isNaN(d.desired.value.toString()) ? (
                  <FormattedMessage id={d.desired.value} />
                ) : isNaN(d.desired.value.toString()) ? (
                  <FormattedMessage id="off" />
                ) : (
                  d.desired.value
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Dispositivos;
