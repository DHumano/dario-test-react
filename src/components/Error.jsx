import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useStudentList } from './Container';
import * as S from './Styled';

const Error = () => {
    const { error } = useStudentList();

    return (
        <S.ContainerError>
            <Alert variant="outlined" severity="error">
                {error}
            </Alert>
        </S.ContainerError>
    );
};

export default Error;
