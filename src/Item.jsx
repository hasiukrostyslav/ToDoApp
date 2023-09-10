import styled, { css } from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { useTask } from './TaskContext';

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 1.6rem;
  background-color: var(--color-grey-500);
  border: 1px solid var(--color-grey-400);
  border-radius: 0.8rem;
`;

const Checkbox = styled.input`
  cursor: pointer;
  display: none;
`;

const CheckboxEmpty = styled.span`
  position: absolute;
  top: 35%;
  left: 2.4rem;
  width: 1.6rem;
  height: 1.6rem;
  border: 3px solid var(--color-blue-500);
  border-radius: 50%;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    border: 3px solid var(--color-blue-700);
  }
`;
const CheckboxMark = styled(IoCheckmarkOutline)`
  position: absolute;
  top: 35%;
  left: 2.4rem;
  width: 1.6rem;
  height: 1.6rem;
  padding: 0.2rem;
  background-color: var(--color-purple-500);
  color: var(--color-grey-100);
  border-radius: 50%;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-purple-700);
  }
`;

const Label = styled.label`
  padding-left: 3.6rem;
  flex-shrink: 1;
  font-weight: 300;
  cursor: pointer;

  ${(props) =>
    props.$status === 'default' &&
    css`
      text-decoration-line: none;
      color: var(--color-grey-100);
    `}

  ${(props) =>
    props.$status === 'done' &&
    css`
      text-decoration-line: line-through;
      color: var(--color-grey-300);
    `}
`;

Label.defaultProps = {
  $status: 'default',
};

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  width: 2.4rem;
  height: 2.4rem;
  color: var(--color-grey-300);
  transition: all 0.5s;
  border-radius: 0.8rem;

  &:hover,
  &:active {
    color: var(--color-red-500);
    background-color: var(--color-grey-400);
  }
`;

function Item({ id, text, isDone }) {
  const { changeStatus, deleteTask } = useTask();
  return (
    <StyledItem>
      <Checkbox type="checkbox" id={id} />
      <Label
        $status={isDone ? 'done' : ''}
        htmlFor={id}
        onClick={() => changeStatus(id)}
      >
        {isDone ? <CheckboxMark /> : <CheckboxEmpty />}
        {text}
      </Label>
      <DeleteButton onClick={() => deleteTask(id)}>
        <RiDeleteBin6Line />
      </DeleteButton>
    </StyledItem>
  );
}

export default Item;
