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

const Lesson9: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 9: Improved objects capabilities</HeaderH1>
            <HeaderH3>Task</HeaderH3>
            <ul>
                <li>
                    <Button
                        onClick = { () => {
                            /**
                             * Задача 1.
                             *
                             * Создайте функцию shallowMerge.
                             * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
                             * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
                             * Свойства необходимо копировать лишь на один уровень каждого их объектов.
                             *
                             * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
                             */
                            function shallowMerge(object1: object, object2: object) {
                                const propertyNames1 = Object.getOwnPropertyNames(object1);
                                const propertyNames2 = Object.getOwnPropertyNames(object2);
                                const newObject = {};

                                propertyNames1.forEach((propertyName) => {
                                    const descriptors = Object.getOwnPropertyDescriptor(
                                        object1,
                                        propertyName,
                                    );

                                    Object.defineProperty(newObject, propertyName, descriptors || '');
                                });

                                propertyNames2.forEach((propertyName) => {
                                    const descriptors = Object.getOwnPropertyDescriptor(
                                        object2,
                                        propertyName,
                                    );
                                    Object.defineProperty(newObject, propertyName, descriptors || '');
                                });

                                return newObject;
                            }

                            const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
                            const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

                            Object.defineProperty(user, 'firstName', { writable: false });
                            Object.defineProperty(userData, 'job', { configurable: false });

                            const result = shallowMerge(user, userData);

                            console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
                            console.log(Object.getOwnPropertyDescriptor(result, 'firstName')?.writable); // false
                            console.log(Object.getOwnPropertyDescriptor(result, 'job')?.configurable); // false
                        } }>
                        Task
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson9 />
    </ErrorBoundary>
);
