import {
    slide,
    calculator,
    screen,
    keyPad,
    numbers,
    deleteBtn,
    resetBtn,
    igual,
    btnOperator
    } from './variables.js';

const changeThemes = e => {

    if(e.target.value === '1') {

        //Remover estilos de los temas 2 y 3.
        calculator.classList.remove('lightTheme--main',
                                     'violetTheme--main',
                                      'lightTheme--text',
                                      'violetTheme--text');

        screen.classList.remove('lightTheme--screen',
                                'viotelTheme--screen',
                                'theme2--color',
                                'theme3--color');

        keyPad.classList.remove('lightTheme--keyPad', 'violetTheme--keyPad')
        slide.classList.remove('lightTheme--slide', 'viotelTheme--slide');
        numbers.forEach(number => number.classList.remove('lightTheme--number', 'violetTheme--number'));
        btnOperator.forEach(operator => operator.classList.remove('lightTheme--number', 'violetTheme--number'));
        deleteBtn.classList.remove('lightThemeDelReset', 'violetThemeDelReset');
        resetBtn.classList.remove('lightThemeDelReset', 'violetThemeDelReset');
        igual.classList.remove('lightTheme--result', 'violetTheme--result');
        
        
        //Añadir los estilos del tema 1
        calculator.classList.add('darkTheme--main', 'darkTheme--text');
        screen.classList.add('darkTheme--screen', 'theme1--color');
        keyPad.classList.add('darkTheme--keyPad');
        slide.classList.add('darkTheme--slide');
        slide.style.setProperty('--colorAfter', 'hsl(6, 63%, 50%)');
        numbers.forEach(number => number.classList.add('DarkTheme--number'));
        btnOperator.forEach(operator => operator.classList.add('DarkTheme--number'));
        deleteBtn.classList.add('darkThemeDelReset');
        resetBtn.classList.add('darkThemeDelReset');
        igual.classList.add('darkTheme--result');
        return;
    };

    if(e.target.value === '2') {

        //remover los estilos de los temas 1 y 3
        calculator.classList.remove('darkTheme--main',
                                    'violetTheme--main',
                                    'darkTheme--text',
                                    'violetTheme--text');

        screen.classList.remove('darkTheme--screen',
                                'viotelTheme--screen',
                                'theme1--color',
                                'theme3--color');

        keyPad.classList.remove('darkTheme--keyPad', 'violetTheme--keyPad')
        slide.classList.remove('darkTheme--slide', 'viotelTheme--slide');
        numbers.forEach(number => number.classList.remove('DarkTheme--number', 'violetTheme--number'));
        btnOperator.forEach(operator => operator.classList.remove('DarkTheme--number', 'violetTheme--number'));
        deleteBtn.classList.remove('darkThemeDelReset', 'violetThemeDelReset');
        resetBtn.classList.remove('darkThemeDelReset', 'violetThemeDelReset');
        igual.classList.remove('darkTheme--result', 'violetTheme--result');

        //Añadir los estilos del tema 2
        calculator.classList.add('lightTheme--main', 'lightTheme--text');
        screen.classList.add('lightTheme--screen', 'theme2--color');
        keyPad.classList.add('lightTheme--keyPad')
        slide.classList.add('lightTheme--slide')
        slide.style.setProperty('--colorAfter', 'hsl(25, 98%, 40%)');
        numbers.forEach(number => number.classList.add('lightTheme--number'));
        btnOperator.forEach(operator => operator.classList.add('lightTheme--number'));
        deleteBtn.classList.add('lightThemeDelReset');
        resetBtn.classList.add('lightThemeDelReset');
        igual.classList.add('lightTheme--result');

        return;
    };

    if(e.target.value === '3') {

        //remover los estilos de los temas 1 y 2
        calculator.classList.remove('darkTheme--main',
                                     'lightTheme--main',
                                     'darkTheme--text',
                                     'lightTheme--text');

        screen.classList.remove('lightTheme--screen',
                                'darkTheme--screen',
                                'theme1--color',
                                'theme2--color',
                                );

        slide.classList.remove('darkTheme--slide', 'lightTheme--slide');
        keyPad.classList.remove('darkTheme--keyPad', 'lightTheme--keyPad');
        numbers.forEach( number => number.classList.remove('lightTheme--number', 'DarkTheme--number'));
        btnOperator.forEach( operator => operator.classList.remove('lightTheme--number', 'DarkTheme--number'));
        deleteBtn.classList.remove('darkThemeDelReset', 'lightThemeDelReset');
        resetBtn.classList.remove('lightThemeDelReset', 'darkThemeDelReset');
        igual.classList.remove('darkTheme--result', 'lightTheme--result');

        //Añadir los estilos del tema 3
        calculator.classList.add('violetTheme--main', 'violetTheme--text');
        screen.classList.add('viotelTheme--screen', 'theme3--color');
        slide.classList.add('viotelTheme--slide', 'lightTheme--keyPad');
        slide.style.setProperty('--colorAfter', 'hsl(185, 42%, 37%)');
        keyPad.classList.add('violetTheme--keyPad');
        numbers.forEach( number => number.classList.add('violetTheme--number'));
        btnOperator.forEach( operator => operator.classList.add('violetTheme--number'));
        deleteBtn.classList.add('violetThemeDelReset');
        resetBtn.classList.add('violetThemeDelReset');
        igual.classList.add('violetTheme--result');
        return;
    };

};

export default changeThemes;