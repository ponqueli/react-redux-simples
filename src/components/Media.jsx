import './Intervalo.css';
import Card from './Card';
import React from 'react';

const Media = (props) => {
  return (
    <Card title="Média de Números" green>
        <div className="Media">
            <span>
                <span>Resultado:</span>
                <strong>5</strong>
            </span>
        </div>
    </Card>
  )
}

export default Media;