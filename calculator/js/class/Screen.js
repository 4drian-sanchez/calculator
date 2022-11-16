import {screenValorActual,
        screenValorAnterior,
        decimal} from '../variables.js';

import Calculator from './Calculator.js'

class Screen {

    constructor(screenValorActual, screenValorAnterior) {
        this.screenValorActual = screenValorActual;
        this.screenValorAnterior = screenValorAnterior;
        this.calculadora = new Calculator();
        this.tipoOperador = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.operador = {
            sumar: '+',
            restar: '-',
            multiplicar: '*',
            dividir: '/'
        };
    }

    //Borrar un numero de la pantalla
    borrar() {
        this.valorActual = this.valorActual.slice(0, -1);
        this.imprimirValores();
    };

    //Borra todo de la pantalla
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperador = undefined;
        this.imprimirValores();
    }
    
    computar(tipo) {
        this.tipoOperador !== 'igual' && this.calcular();
        this.tipoOperador = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '' ;
        this.imprimirValores();
    }
    
    agregarNumero(numero) {

        if(screenValorActual.textContent.length <= 22) {
            this.valorActual += numero;
            this.imprimirValores();
        };

    };

    agregarDecimal(decimal) {
        if(this.valorActual.includes('.')) return;
        this.valorActual += decimal;
        this.imprimirValores();
    }
    
    imprimirValores() {


        this.screenValorActual.textContent = this.valorActual;
        this.screenValorAnterior.textContent = `${this.valorAnterior} ${this.operador[this.tipoOperador] || ''}`;

    };

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculadora[this.tipoOperador](valorAnterior, valorActual);
    }
    
};

export default Screen;