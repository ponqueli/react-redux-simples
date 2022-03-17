import './Intervalo.css';
import Card from './Card';
import React from 'react';

const Soma = (props) => {
  return (
    <Card title="Soma de Números" blue>
        <div className="Soma">
            <span>
                <span>Resultado:</span>
                <strong>10</strong>
            </span>
        </div>
    </Card>
  )
}

export default Soma;