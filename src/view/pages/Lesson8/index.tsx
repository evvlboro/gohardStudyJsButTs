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

const Lesson8: FC<PropTypes> = () => {
    const { push } = useHistory();

    return (
        <S.Container>
            <Button
                onClick = { () => void push(book.ROOT) }>
                Back
            </Button>
            <HeaderH1>Lesson 8: Error handling and debugging</HeaderH1>
            <HeaderH3>Errors examples</HeaderH3>
            <ul>
                <li>
                    <Button
                        onClick = { () => {
                            try {
                                throw new Error('Manually generated error!');
                            } catch (error) {
                                console.log(error);
                            }
                        } }>
                        Error
                    </Button>
                </li>
            </ul>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson8 />
    </ErrorBoundary>
);
