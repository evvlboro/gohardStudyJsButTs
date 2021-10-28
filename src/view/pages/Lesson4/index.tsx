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

const Lesson4: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 4: objects</HeaderH1>
            <HeaderH3>Tasks</HeaderH3>
            <p>To test the buttons work open the console.</p>
            <ul>
                <li>
                    <Button onClick = { () => {
                        /**
                         * Задача 1.
                         *
                         * Создайте объект `person` у которого будет одно свойство `salary`.
                         * При чтении этого свойства должна возвращаться строка с текстом.
                         * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
                         */

                        const person = {
                            get salary() {
                                const today = new Date();
                                const currentYear = today.getFullYear();
                                const currentMonth = today.getMonth() + 1;
                                const currentDay = today.getDate();
                                const daysInCurrentMonth = new Date(
                                    currentYear,
                                    currentMonth,
                                    0,
                                ).getDate();

                                console.log(daysInCurrentMonth - currentDay);

                                return daysInCurrentMonth - currentDay > 20
                                    ? 'good salary'
                                    : 'bad salary';
                            },
                        };

                        console.log(person.salary);
                    } }>
                        task 1
                    </Button>
                </li>
                <li>
                    <Button onClick = { () => {
                        /**
                         * Задача 2.
                         *
                         * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
                         * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
                         * Свойство `salary` можно читать, но нельзя менять.
                         * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
                         */

                        const person = { rate: 0, salary: 0 };

                        Object.defineProperties(person, {
                            rate: {
                                value:    0,
                                writable: true,
                            },
                            salary: {
                                get() {
                                    const currentDay = new Date().getDate();

                                    // eslint-disable-next-line react/no-this-in-sfc
                                    return this.rate * currentDay;
                                },
                            },
                        });

                        person.rate = 10;
                        console.log(person.salary);
                    } }>
                        task 2
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson4 />
    </ErrorBoundary>
);
