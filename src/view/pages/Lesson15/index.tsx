// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Lesson15: FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: Lesson15
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Lesson15 />
    </ErrorBoundary>
);
