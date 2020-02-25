import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PriceContainer = styled.div`
  width: 120px;
  display: flex;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const BCHPrice = ({ price }) => (
  <Container>
    <PriceContainer>
      <Img src="https://menu.cdn.bitcoindotcom.net/uni/dist/assets/crypto/bch.png" alt="BCH" />
      BCH {price}
    </PriceContainer>
  </Container>
);

BCHPrice.propTypes = {
  price: PropTypes.number,
};

export default BCHPrice;
