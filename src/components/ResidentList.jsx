/* eslint-disable no-unused-vars */
import React from 'react';
import { useStudentList } from './Wrapper';

const ResidentList = () => {
    const { list } = useStudentList();

    return list.map((element) => <div>{element}</div>);
};
export default ResidentList;
