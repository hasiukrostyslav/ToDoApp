import styled from 'styled-components';
import Form from './Form';
import List from './List';

const Container = styled.div`
  position: relative;
  width: 73.4rem;
  margin: 0 auto;
`;

function MainSection() {
  return (
    <main>
      <Container>
        <Form />
        <List />
      </Container>
    </main>
  );
}

export default MainSection;
