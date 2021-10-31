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

const Lesson11: FC<PropTypes> = () => {
    const { push } = useHistory();

    /**
 * Внутри каждой функции существует специальный внутренний объект,
 * который содержит все переменные, принадлежащие этой функции.
 *
 * Этот объект называется «лексическое окружение», или LexicalEnvironment (далее — LE).
 */

    function printName() {
        const name = 'Oliver';

        console.log(name);
    }

    printName();

    /**
 * В объект LE записываются все переменные, объявленные внутри функции, включая её параметры.
 *
 * Важно: объект LE для каждой функции создаётся непосредственно в момент выполнения этой функции.
 * В момент объявления функции объект LE не создаётся.
 *
 * Процесс выполнения тела функции такой-же, как и процесс выполнения глобального скрипта.
 * Причём, по сути, тот самый глобальный объект с глобальными переменными
 * является частным случаем LE для функций.
 */

    function printName1(name: string) {
        /* В момент выполнения внутри этой функции создастся объект LE */

        /* Этап декларации: printName[[LexicalEnvironment]] = { name: 'Oliver', prefix: undefined } */
        var prefix = 'Hello! My name is';
        /* Этап инициализации: printName[[LexicalEnvironment]] = { name: 'Oliver', prefix: 'Hello! My name is' } */

        console.log(`${prefix} ${name}.`);
    }

    printName1('Oliver');

    /**
 * Приблизительный сценария выполнения данного скрипта:
 *
 * Этап декларации всего скрипта:
 * 1:  Global [[LexicalEnvironment]] = { message: undefined, printName: [Function: printName] }
 * Этап инициализации всего скрипта:
 * 1.  Выполнение функции console.log(message);
 * 2.  Выполнение функции printName('Oliver');
 *     Этап декларации функции printName:
 *     1.  Global [[LexicalEnvironment]].printName[[LexicalEnvironment]] = { name: 'Oliver', prefix: undefined }
 *     Этап инициализации функции printName:
 *     1.  Global [[lexicalEnvironment]].printName[[LexicalEnvironment]] = { name: 'Oliver', prefix: 'Hello! My name is' }
 *     2.  ВЫполнение функции console.log(`${prefix} ${name}.`)
 * 3.  Выполнение функции console.log('✓ Finish.');
 *
 * На момент выполнения последнего console.log, внутренний LE функции printName удалится.
 */

    let message = 'Lexical Environment creation process';

    function printName2(name: string) {
        var prefix = 'Hello! My name is';

        console.log(`${prefix} ${name}.`);
    }

    console.log(message);
    printName2('Oliver');
    console.log('✓ Finish.');

    // scope
    // closure

    /**
 *  [[Scope]] - это скрытое внутреннее свойство функции, которое она получает во время вызова.
 * Данное свойство содержит ссылку на ту область видимости, в которой данная функция была объявлена.
 */


    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 11: Closure</HeaderH1>

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson11 />
    </ErrorBoundary>
);
