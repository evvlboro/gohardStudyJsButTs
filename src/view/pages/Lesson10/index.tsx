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


const Lesson10: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 10: Improved functions capabilities</HeaderH1>
            <ul>
                <li>
                    <Button
                        onClick = { () => {
                            /**
                             * Задача 1.
                             *
                             * Напишите имплементацию функции Function.prototype.bind().
                             *
                             * Наша собственная функция bind() должна задавать контекст выполнения целевой функции,
                             * и возвращать новую, привязанную версию целевой функции.
                             *
                             * Функция bind() должна обладать следующими параметрами:
                             * - Первый параметр — это функция, контекст выполнения которой мы хотим привязать;
                             * - Второй параметр — это объект (не массив), в контексте которого нужно вызывать функцию из первого параметра;
                             * - Третий и все остальные параметры — это аргументы для вызова функции из первого параметра.*/

                            const bind = (func: (gr: string, message: string)=>string,
                                context: object,
                                ...rest: any) => {
                                return () => func.apply(context, rest);
                            };

                            // eslint-disable-next-line max-len
                            function getName(this: { name: string; getName: (greeting: string, message: string) => string; }, greeting: string, message: string) {
                                // eslint-disable-next-line react/no-this-in-sfc
                                const name = this.name;

                                return `${greeting} ${message} ${name}.`;
                            }

                            const user = { name: 'Walter', getName };
                            const oliver = { name: 'Oliver' };

                            const boundedGetName = bind(getName, oliver, 'Hello!', 'I am');

                            console.log(user.getName('Hello!', 'My name is')); // Hello! My name is Walter.
                            console.log(boundedGetName()); // Hello! I am Oliver.
                        } }>
                        Taks
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson10 />
    </ErrorBoundary>
);
