/* eslint-disable no-unused-vars */

import React, { createContext, useContext, useState } from 'react';
import Search from './Search';
import Error from './Error';
import ResidentList from './ResidentList';
import * as S from './styled';

export const StudentListContext = createContext();

export const useStudentList = () => useContext(StudentListContext);

const Wrapper = () => {
    const [test, setTest] = useState('');
    // const [test, setTest] = useState('');
    // const [test, setTest] = useState('');

    const values = {
        test,
        setTest
    };

    return (
        <S.Dv>
            <StudentListContext.Provider value={values}>
                <Search />
                <Error />
                <ResidentList />
            </StudentListContext.Provider>
        </S.Dv>
    );
};

export default Wrapper;
