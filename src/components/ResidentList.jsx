import React from 'react';
import { useStudentList } from './Container';
import * as S from './Styled';

const ResidentList = () => {
    const { list } = useStudentList();

    return (
        <>
            <S.Subtitle>Resident List</S.Subtitle>
            {list.map((element) => (
                <S.List key={element}>
                    <ul>{element}</ul>
                </S.List>
            ))}
        </>
    );
};

export default ResidentList;
