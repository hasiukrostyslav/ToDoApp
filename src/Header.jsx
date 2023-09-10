import styled, { css } from 'styled-components';
import { RxRocket } from 'react-icons/rx';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  background-color: var(--color-grey-700);
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 7.2rem 0 8rem;
  font-size: 4rem;
  font-weight: bold;
`;

const Icon = styled(RxRocket)`
  width: 3.6rem;
  color: var(--color-blue-500);
`;

const Span = styled.span`
  ${(props) =>
    props.color === 'blue' &&
    css`
      color: var(--color-blue-500);
    `}

  ${(props) =>
    props.color === 'purple' &&
    css`
      color: var(--color-purple-700);
    `}
`;

function Header() {
  return (
    <StyledHeader>
      <Heading>
        <Icon />
        <span>
          <Span color="blue">to</Span>
          <Span color="purple">do</Span>
        </span>
      </Heading>
    </StyledHeader>
  );
}

export default Header;
