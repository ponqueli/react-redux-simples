import "./Intervalo.css";
import Card from "./Card";
import React from "react";
import { connect } from "react-redux";

const Sorteio = (props) => {
  const { min, max } = props;
  const aleatoryNumber = parseInt(Math.random() * max + min);

  return (
    <Card title="Sorteio de Números" purple>
      <div className="Sorteio">
        <span>
          <span>Resultado:</span>
          <strong>{aleatoryNumber}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Sorteio);
