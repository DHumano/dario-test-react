/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { students } from '../StudentsList';
import { useStudentList } from './Container';
import * as S from './Styled';

const checkValidity = () => {};

const Search = () => {
    const { list, setList, setError, setStudent, setJoiningDate, student, joiningDate } =
        useStudentList();

    const handleClick = () => {
        console.log(joiningDate);
    };

    return (
        <S.Wrapper>
            <TextField
                onChange={(e) => setStudent(e.target.value)}
                id="standard-basic"
                label="Student Name"
            />
            <TextField
                onChange={(e) => setJoiningDate(e.target.value)}
                id="date"
                label="Joining Date"
                type="date"
                defaultValue={joiningDate}
                InputLabelProps={{
                    shrink: true
                }}
            />
            <Button onClick={handleClick} variant="contained" color="primary">
                Add
            </Button>
        </S.Wrapper>
    );
};

export default Search;
