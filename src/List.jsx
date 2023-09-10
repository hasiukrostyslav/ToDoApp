import styled from 'styled-components';
import { useTask } from './TaskContext';
import EmptyTasks from './EmptyTasks';
import Label from './Label';
import Item from './Item';

const StyledTasksBox = styled.div`
  padding-top: 9.2rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  margin-top: 2.4rem;
`;

function List() {
  const { tasks } = useTask();

  return (
    <StyledTasksBox>
      <Label />
      {tasks.length === 0 && <EmptyTasks />}
      {tasks.length > 0 && (
        <StyledList>
          {tasks.map((task) => (
            <Item
              key={task.id}
              id={task.id}
              text={task.task}
              isDone={task.isDone}
            />
          ))}
        </StyledList>
      )}
    </StyledTasksBox>
  );
}

export default List;
