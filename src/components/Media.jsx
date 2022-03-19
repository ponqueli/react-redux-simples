import "./Intervalo.css";
import Card from "./Card";
import React from "react";
import { connect } from "react-redux"; //does the connection between component and state

const Media = (props) => {
  const { min, max } = props;
  console.log(props)
  return (
    <Card title="Média de Números" green>
      <div className="Media">
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

//estado global de todos os componentes
function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
    nomes: state.nomes
  };
}

export default connect(mapStateToProps)(Media);
