import React from 'react';
import styled from 'styled-components';

// Components
import BCHPrice from '../../components/BCHPrice';
import BCHGraph from '../../components/BCHGraph';
import NewsList from '../../components/NewsList';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <Container>
      <BCHPrice />
      <BCHGraph />
      <NewsList />
    </Container>
  );
};

export default Home;
