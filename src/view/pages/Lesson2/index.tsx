/* eslint-disable no-alert */
// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary, Button, HeaderH1, HeaderH3 } from '../../components';

// Styles
import * as S from './styles';

// Book
import { book } from '../../routes/book';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson2: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 2: Control flow</HeaderH1>
            <HeaderH3>Conditional operators</HeaderH3>
            <p>To test the buttons work open the console.</p>
            <ul>
                <li>
                    <Button onClick = { ()=>{
                        let name = prompt('Enter your name', 'Yauhen');

                        if (name) {
                            console.log(`Hello, ${name}!`);
                        }
                    } }>
                        IF
                    </Button>
                </li>
                <li>
                    <Button onClick = { ()=>{
                        const name = prompt('Enter your name', 'Yauhen');
                        const listOfUsers = [ 'Mark', 'Anton', 'Yauhen' ];

                        if (listOfUsers.includes(name ?? '')) {
                            console.log(`Hello, ${name}!`);
                        } else {
                            console.log('Hello Stranger!');
                        }
                    } }>
                        IF ELSE
                    </Button>
                </li>
                <li>
                    <Button onClick = { ()=>{
                        const n = Number(prompt('Enter number', '1'));

                        if (n === 1) {
                            console.log('n === 1');
                        } else if (n === 2) {
                            console.log('n === 2');
                        } else if (n === 3) {
                            console.log('n === 3');
                        } else {
                            console.log('another option');
                        }
                    } }>
                        ELSE IF
                    </Button>
                </li>
                <li>
                    <Button onClick = { ()=>{
                        const height = Number(prompt('Enter your height to go to the attraction', '150'));
                        height > 150 ? console.log('ok') : console.log('too small');
                    } }>
                        Ternary Operator
                    </Button>
                </li>
                <li>
                    <Button onClick = { ()=>{
                        const color = prompt('Enter color name', 'red');

                        switch (color) {
                            case 'red':
                                console.log('STOP');
                                break;
                            case 'yellow':
                                console.log('Wait a little bit');
                                break;
                            case 'green':
                                console.log('START');
                                break;
                            default:
                                console.log('I don\'t know this color!');
                        }
                    } }>
                        SWITCH
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson2 />
    </ErrorBoundary>
);
