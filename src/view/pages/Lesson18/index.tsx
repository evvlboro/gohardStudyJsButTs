// Core
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { Button, HeaderH1 } from '../../elements';

// Book
import { book } from '../../routes/book';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson18: FC<PropTypes> = () => {
    const { push } = useHistory();

    let map = new Map();

    map.set('1', 'str1');
    map.set(1, 'num1');
    map.set(true, 'bool1');

    console.log(map.get(1));
    console.log(map.get('1'));

    console.log(map.size); // 3

    let john = { name: 'John' };

    let visitsCountMap = new Map();

    visitsCountMap.set(john, 123);

    console.log(visitsCountMap.get(john)); // 123


    let recipeMap = new Map([
        [ 'огурец', 500 ],
        [ 'помидор', 350 ],
        [ 'лук', 50 ],
    ]);

    // перебор по ключам (овощи)
    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable); // огурец, помидор, лук
    }

    // перебор по значениям (числа)
    for (let amount of recipeMap.values()) {
        console.log(amount); // 500, 350, 50
    }

    // перебор по элементам в формате [ключ, значение]
    for (let entry of recipeMap) {
        console.log(entry);
    }
    let set = new Set();

    let pete = { name: 'Pete' };
    let mary = { name: 'Mary' };

    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(john);
    set.add(mary);

    console.log(set.size);

    for (let user of set) {
        console.log(user);
    }

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 18: Map & Set</HeaderH1>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson18 />
    </ErrorBoundary>
);
