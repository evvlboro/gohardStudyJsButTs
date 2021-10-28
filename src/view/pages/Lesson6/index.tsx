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

type ForEachContract = <T>(
    array: Array<T>,
    func: (item: T, index: number, arrayRef: Array<T>) => void
) => void

type FilterContract = <T>(
    array: Array<T>,
    func: (item: T, index: number, arrayRef: Array<T>) => Boolean
) => Array<T>

type EvryContract = <T>(
    array: Array<T>,
    func: (item: T, index: number, arrayRef: Array<T>) => boolean
) => Boolean

const Lesson6: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 6: arrays</HeaderH1>
            <HeaderH3>Tasks</HeaderH3>
            <ul>
                <li>
                    <Button onClick = { () => {
                        /* Задача 1.
                            * Вручную создать имплементацию функции`forEach`.
                            * Логика работы ручной имплементации должна быть такой - же,
                            * как и у встроенного метода.
                            */
                        const array = [ 1, 2, 3 ];

                        const forEach: ForEachContract = (array, func) => {
                            for (let index = 0; index < array.length; index++) {
                                const element = array[ index ];

                                func(element, index, array);
                            }
                        };

                        // Решение
                        const result = forEach<number>(array, function (item, index, arrayRef) {
                            console.log(item); // элемент массива
                            console.log(index); // индекс элемента
                            console.log(arrayRef); // ссылка на обрабатываемый массив
                        });

                        console.log('result', result); // undefined
                    } }>
                        Task 1
                    </Button>
                </li>
                <li>
                    <Button onClick = { () => {
                        /**
                         * Задача 2.
                         *
                         * Вручную создать имплементацию функции `filter`.
                         * Логика работы ручной имплементации должна быть такой-же,
                         * как и у встроенного метода.
                         */

                        const array = [ 'Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!' ];

                        // Решение

                        const filter: FilterContract = (array, func) => {
                            const res = [];
                            for (let index = 0; index < array.length; index++) {
                                const element = array[ index ];

                                if (func(element, index, array)) {
                                    res.push(element);
                                }
                            }

                            return res;
                        };

                        // Результат

                        const filteredArray = filter(array, function (item, i, arrayRef) {
                            console.log(item); // элемент массива
                            console.log(i); // индекс элемента
                            console.log(arrayRef); // ссылка на обрабатываемый массив

                            return item === 'Добрый вечер!';
                        });

                        console.log('filteredArray', filteredArray); // ['Добрый вечер!']
                    } }>
                        Task 2
                    </Button>
                </li>
                <li>
                    <Button onClick = { () => {
                        /**
                         * Задача 3.
                         *
                         * Вручную создать имплементацию функции `every`.
                         * Логика работы ручной имплементации должна быть такой-же,
                         * как и у встроенного метода.
                         * */

                        const every: EvryContract = (array, callback) => {
                            let status = false;

                            for (let counter = 0; counter < array.length; counter++) {
                                const current = array[ counter ];
                                status = callback(current, counter, array);

                                if (!status) {
                                    break;
                                }
                            }

                            return status;
                        };

                        const array = [ 1, 6, 4, 2 ];

                        const result = every(array, function (item) {
                            return item % 2 === 0;
                        });

                        console.log(result); // false
                    } }>
                        Task 3
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson6 />
    </ErrorBoundary>
);
