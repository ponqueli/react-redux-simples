import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numerosAction";
import "./Intervalo.css";
import Card from "./Card";
import React from "react";
import { connect } from "react-redux";

const Intervalo = (props) => {
  const { min, max } = props;
  
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} onChange={e=> props.alterarMinimo(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} onChange={e=>props.alterarMaximo(+e.target.value)} />
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

//chamar o dispatch que acabou de acontecer e notificar todos os reducers da aplicação
function mapDispatchToProp(dispatch) {
  return {
    alterarMinimo(novoNumero){
      //action creator -> retorna uma action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero){
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    }
  }
}

export default connect(
    mapStateToProps,          // 1o estado das propriedades
    mapDispatchToProp         // 2o action
    )(Intervalo);
