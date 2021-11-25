/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useStudentList } from './Wrapper';

const ResidentList = () => {
    const { test, setTest } = useStudentList();
    console.log(test);
    setTimeout(() => {
        setTest('testtst');
        console.log(test);
    }, 1000);

    return <div>test</div>;
};
export default ResidentList;
