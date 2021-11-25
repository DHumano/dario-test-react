import React from 'react';
import { useStudentList } from './Wrapper';
// import * as S from './Styled';

const Error = () => {
    const { error } = useStudentList();

    return <div>{error}</div>;
};

export default Error;
