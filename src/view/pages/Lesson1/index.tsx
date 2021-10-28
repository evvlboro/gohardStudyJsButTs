/* eslint-disable no-eval */
/* eslint-disable no-alert */
// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'
import { useMessages } from '../../../bus/messages';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button, HeaderH1, HeaderH3 } from '../../elements';

// Styles
import * as S from './styles';

// Book
import { book } from '../../routes/book';


// Types
type PropTypes = {
    /* type props here */
}

const Lesson1: FC<PropTypes> = () => {
    const { push } = useHistory();
    const { messages } = useMessages();
    console.log('🚀 ~ file: index.tsx ~ line 27 ~ messages', messages);

    const showExampleUndefined = () => {
        // eslint-disable-next-line init-declarations
        let undefinedVar;
        const result = `
            Variable: undefinedVar; value: ${undefinedVar}; type: ${typeof undefinedVar}
        `;
        alert(result);
    };

    const showExampleNull = () => {
        const nullVar = null;
        const result = `
            Variable: nullVar; value: ${nullVar}; type: ${typeof nullVar} 
        `;
        alert(result);
    };

    const showExampleBoolean = () => {
        const trueVar = true;
        const falseVar = false;
        const result = `
            Variable: trueVar; value: ${trueVar}; type: ${typeof trueVar}
            Variable: falseVar; value: ${falseVar}; type: ${typeof falseVar}
        `;
        alert(result);
    };

    const showExampleNumber = () => {
        let numberVar = Number(prompt('Enter number', '0'));
        const result = `
            Variable: numberVar; value: ${numberVar}; type: ${typeof numberVar}
        `;
        alert(result);
    };

    const showExampleString = () => {
        let stringVar = prompt('Enter string', 'something');
        const result = `
            Variable: numberVar; value: ${stringVar}; type: ${typeof stringVar}
        `;
        alert(result);
    };

    const showExampleObject = () => {
        const user = {
            name:        'Yauheni',
            age:         24,
            location:    'Kyiv, Ukraine',
            'like cats': true,
        };
        alert(`Variable: user; value: ${JSON.stringify(user) }; type: ${ typeof user }`);
    };

    const showExampleSymbol = () => {
        let symbolVar = Symbol('some symbol');
        alert(`Variable: symbolVar; value: ${String(symbolVar)}; type: ${typeof symbolVar }`);
    };

    const showArithmeticsExample = () => {
        const expression = prompt('Enter some arithmetical or logical expression.', '1+1');
        alert(`expression: ${expression} 
        value: ${eval(expression ?? '')}`);
    };


    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 1: Variables, data types, operators and arithmetics</HeaderH1>
            <HeaderH3>Data types:</HeaderH3>
            <ul>
                <li>
                    <Button
                        onClick = { showExampleUndefined }>
                        undefined
                    </Button>
                </li>
                <li>
                    <Button
                        onClick = { showExampleNull }>
                        null
                    </Button>
                </li>
                <li>
                    <Button
                        onClick = { showExampleBoolean }>
                        boolean
                    </Button>
                </li>
                <li>
                    <Button
                        onClick = { showExampleNumber }>
                        number
                    </Button>
                </li>
                <li>
                    <Button
                        onClick = { showExampleString }>
                        string
                    </Button>
                </li>
                <li>
                    <Button
                        onClick = { showExampleObject }>
                        object
                    </Button>
                </li>
                <li>
                    <Button
                        onClick = { showExampleSymbol }>
                        symbol
                    </Button>
                </li>
            </ul>
            <HeaderH3>Logical operators and arithmetics</HeaderH3>
            <Button onClick = { showArithmeticsExample }>example</Button>
            {/* <iframe
                allow = 'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                sandbox = 'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                src = 'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark'
                style = {{
                    width:        '100%',
                    height:       '500px',
                    border:       '0',
                    borderRadius: '4px',
                    overflow:     'hidden',
                }}
                title = 'React'>
            </iframe> */}
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson1 />
    </ErrorBoundary>
);
