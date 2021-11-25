import React from 'react';
import { useStudentList } from './Container';
import * as S from './Styled';

const Error = () => {
    const { error } = useStudentList();

    return <S.Alert>{error}</S.Alert>;
};

export default Error;
