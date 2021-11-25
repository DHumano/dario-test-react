import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { students } from '../StudentsList';
import { useStudentList } from './Container';
import * as S from './Styled';

const Search = () => {
    const { list, setList, setError, setStudent, setJoiningDate, student, joiningDate } =
        useStudentList();

    const checkStudentValidity = () =>
        students.filter((element) => element.name.toUpperCase() === student.toUpperCase());

    const checkValidity = (initialDate, validityDate) => {
        const initial = new Date(initialDate);
        const validity = new Date(validityDate);
        return initial.getTime() < validity.getTime();
    };

    const persistList = () => {
        setList(list.push(student));
    };

    const handleClick = () => {
        setError(false);
        if (!student) {
            return false;
        }

        const isStudent = checkStudentValidity();
        if (!isStudent.length) {
            setError(`Sorry, ${student} is not a verified student!`);
            return false;
        }

        const dateIsValid = checkValidity(joiningDate, isStudent[0].validityDate);

        if (!dateIsValid) {
            setError(`Sorry, ${student}'s validity has Expired`);
            return false;
        }

        persistList();
        return true;
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
