import React, { createContext, useContext, useState } from 'react';
import Search from './Search';
import Error from './Error';
import ResidentList from './ResidentList';
import * as S from './Styled';

export const StudentListContext = createContext();

export const useStudentList = () => useContext(StudentListContext);

const Container = () => {
    const [student, setStudent] = useState('');
    const [joiningDate, setJoiningDate] = useState(new Date().toISOString());
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    const values = {
        student,
        setStudent,
        joiningDate,
        setJoiningDate,
        list,
        setList,
        error,
        setError
    };

    return (
        <>
            <S.Title>Hacker Dormitory</S.Title>
            <S.Component>
                <StudentListContext.Provider value={values}>
                    <Search />
                    {error && <Error />}
                    <ResidentList />
                </StudentListContext.Provider>
            </S.Component>
        </>
    );
};

export default Container;
