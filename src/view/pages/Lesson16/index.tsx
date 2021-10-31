/* eslint-disable react/no-this-in-sfc */
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

const Lesson16: FC<PropTypes> = () => {
    const { push } = useHistory();
    class Person {
        name: string;
        constructor(userName: string) {
            this.name = userName;
        }

        print(): void {
            console.log(`Имя: ${this.name}`);
        }
    }

    class Employee extends Person {
        company: string;
        constructor(name: string, company: string) {
            super(name);
            this.company = company;
        }

        print(): void {
            super.print();
            console.log(`Работает в компании: ${this.company}`);
        }
    }

    const jon = new Employee('Jon', 'ABC');

    jon.print();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 16: Classes</HeaderH1>
            <HeaderH3>This lesson was classes.
                Classes are a template for creating objects.
                They encapsulate data with code to work on that data.
                Classes in JS are built on prototypes but also have some syntax and semantics
                that are not shared with ES5 class-like semantics.
            </HeaderH3>
            <p>Example of inheritance in the console.</p>

        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson16 />
    </ErrorBoundary>
);
