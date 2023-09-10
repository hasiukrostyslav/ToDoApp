import { useRef } from 'react';
import styled from 'styled-components';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import { useTask } from './TaskContext';

const StyledForm = styled.form`
  display: flex;
  gap: 0.8rem;
  position: absolute;
  top: -2.6rem;
  width: 100%;
`;

const Input = styled.input`
  padding: 1.6rem;
  border: 1px solid var(--color-grey-700);
  width: 100%;
  background-color: var(--color-grey-500);

  &:active,
  &:focus {
    border: 1px solid var(--color-purple-700);
    outline: none;
  }
`;

const Button = styled.button`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  border: none;
  background-color: var(--color-blue-700);
  color: var(--color-grey-100);
  transition: all 0.5s;

  svg {
    height: 1.6rem;
    width: 1.6rem;
  }

  &:hover {
    background-color: var(--color-blue-500);
    color: var(--color-grey-200);
  }
`;

function Form() {
  const { createTask } = useTask();
  const ref = useRef();

  function handleClick(e) {
    e.preventDefault();
    createTask(ref.current.value);
    ref.current.value = '';
  }
  return (
    <StyledForm onSubmit={handleClick}>
      <Input placeholder="Add new task" defaultValue="" ref={ref} />
      <Button>
        Create
        <HiOutlinePlusCircle />
      </Button>
    </StyledForm>
  );
}

export default Form;
