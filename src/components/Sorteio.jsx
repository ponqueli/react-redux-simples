import './Intervalo.css';
import Card from './Card';
import React from 'react';

const Sorteio = (props) => {
  return (
    <Card title="Sorteio de Números" purple>
        <div className="Sorteio">
            <span>
                <span>Resultado:</span>
                <strong>8</strong>
            </span>
        </div>
    </Card>
  )
}

export default Sorteio;