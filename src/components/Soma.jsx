import "./Intervalo.css";
import Card from "./Card";
import React from "react";
import { connect } from "react-redux";

const Soma = (props) => {

  const {min, max} = props;

  return (
    <Card title="Soma de Números" blue>
      <div className="Soma">
        <span>
          <span>Resultado:</span>
          <strong>{ min + max }</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state){
  return{
    min: state.numeros.min,
    max: state.numeros.max
  }
}

export default connect(mapStateToProps)(Soma);
