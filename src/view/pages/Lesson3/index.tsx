// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button, HeaderH1, HeaderH3 } from '../../elements';


// Book
import { book } from '../../routes/book';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson3: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 3:  functions</HeaderH1>
            <HeaderH3>Tasks</HeaderH3>
            <p>To test the buttons work open the console.</p>
            <ul>
                <li>
                    <Button onClick = { ()=>{
                        // Создайте функцию`f`, которая возвращает куб числа.
                        function f(operand: number) {
                            return operand ** 3;
                        }

                        console.log(f(2));
                    } }>
                        Cube
                    </Button>
                </li>
                <li>
                    <Button onClick = { ()=>{
                        //  * Сделайте функцию`isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет.
                        //  * Если чётное — функция возвращает `true`, если нечётное — `false`.
                        function isEven(n: number) {
                            return n % 2 === 0;
                        }

                        console.log(isEven(3));
                        console.log(isEven(4));
                    } }>
                        is even
                    </Button>
                </li>
                <li>
                    <Button onClick = { ()=>{
                        // * Сделайте функцию`getDivisors`, которая параметром принимает число и возвращает массив его делителей(чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
                        function getDivisors(number: number) {
                            if (number === 0) {
                                throw new Error('parameter can\'t be a 0');
                            }

                            let divisors = [];

                            for (let i = 1; i <= number; i++) {
                                if (number % i === 0) {
                                    divisors.push(i);
                                }
                            }

                            return divisors;
                        }

                        console.log(getDivisors(12));
                    } }>
                        Divisors
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson3 />
    </ErrorBoundary>
);
