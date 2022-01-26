import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;
& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}
& input {
  display: block;
  width: 100%;
  border: 1px solid ${(props) => (props.invalid ? 'red' : 'yellow')};
  background: ${(props) => (props.invalid ? 'transparent' : 'blue')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setISValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setISValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setISValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={isValid}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
