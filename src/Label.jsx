import styled, { css } from 'styled-components';
import { useTask } from './TaskContext';

const LabelBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  font-weight: 700;

  ${(props) =>
    props.color === 'blue' &&
    css`
      color: var(--color-blue-500);
    `}

  ${(props) =>
    props.color === 'purple' &&
    css`
      color: var(--color-purple-500);
    `}
`;

const Count = styled.span`
  color: var(--color-grey-100);
  padding: 0.2rem 0.8rem;
  background-color: var(--color-grey-400);
  border-radius: 20%;
  font-size: 1.2rem;
`;

function Label() {
  const { tasks } = useTask();

  const doneAmount = tasks.filter((task) => task.isDone).length;

  return (
    <LabelBox>
      <StyledLabel color="blue">
        <p>Created tasks</p>
        <Count>{tasks.length}</Count>
      </StyledLabel>
      <StyledLabel color="purple">
        <p>Completed tasks</p>
        <Count>
          {tasks.length === 0 ? 0 : `${doneAmount} of ${tasks.length}`}
        </Count>
      </StyledLabel>
    </LabelBox>
  );
}

export default Label;
