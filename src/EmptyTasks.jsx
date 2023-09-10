import styled, { css } from 'styled-components';
import { PiClipboardTextLight } from 'react-icons/pi';

const StyledEmptyTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6.4rem 2.4rem 0;
  margin-top: 2.4rem;
  border-top: 1px solid var(--color-grey-500);
  border-radius: 0.8rem;

  svg {
    width: 5.6rem;
    height: 5.6rem;
    color: var(--color-grey-500);
    margin-bottom: 1.6rem;
  }
`;

const Text = styled.p`
  color: var(--color-grey-300);
  text-align: center;
  ${(props) =>
    props.$weight === 'normal' &&
    css`
      font-weight: 400;
    `}

  ${(props) =>
    props.$weight === 'bold' &&
    css`
      font-weight: 700;
    `}
`;

Text.defaultProps = {
  $weight: 400,
};

function EmptyTasks() {
  return (
    <StyledEmptyTasks>
      <PiClipboardTextLight />
      <div>
        <Text $weight="bold">You have not created tasks yet</Text>
        <Text>Create tasks and organize to-do items</Text>
      </div>
    </StyledEmptyTasks>
  );
}

export default EmptyTasks;
