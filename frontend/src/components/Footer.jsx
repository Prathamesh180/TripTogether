import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.darkColor};
  color: ${({ theme }) => theme.whiteColor};
  padding: 2rem;

  p {
    font-size: 1.6rem;
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 TripTogether. All rights reserved.</p>
    </FooterWrapper>
  );
}

