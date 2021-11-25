/* eslint-disable no-unused-vars */
import React from 'react';
import { students } from '../StudentsList';
import { useStudentList } from './Wrapper';

const checkValidity = () => {};

const Search = () => {
    const { list, setList, setError } = useStudentList();

    return <>test</>;
};

export default Search;
