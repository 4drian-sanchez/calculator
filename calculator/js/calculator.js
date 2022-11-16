import Calculator from './class/Calculator.js';
import Screen from './class/Screen.js';

import {screenValorActual,
        screenValorAnterior,
        numbers,
        btnOperator,
        decimal,
        igual} from './variables.js';

function calc() {

    const calculator = new Calculator();
    const screen = new Screen( screenValorActual, screenValorAnterior );

    numbers.forEach( number => {
        number.addEventListener( 'click', () => screen.agregarNumero(number.value));
    });

    decimal.addEventListener('click', () => screen.agregarDecimal(decimal.value));

    btnOperator.forEach(operator => {
        operator.addEventListener('click', (e) => {

            if(e.target.name === 'borrar') {
                screen.borrar()
                return;
            }

            if(e.target.name === 'reset') {
                screen.borrarTodo();
                return;
            }

            if(e.target.name === 'sumar' ||
               e.target.name === 'restar' ||
               e.target.name === 'multiplicar' ||
               e.target.name === 'dividir' || 
               e.target.name ===  'igual') {
                screen.computar(e.target.name);
                return;
               };
        });
    });

};

export default calc;