import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.section`
  background-color: #fff;
  padding: 6rem 0;
`;

const ServiceHeading = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  text-align: center;
  color: #333;
`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const ServiceCard = styled.div`
  max-width: 400px;
  height: 400px;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.img`
  height: 80px;
  margin-bottom: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
`;

const ServiceDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: #666;
`;

const ServiceSection = () => {
  return (
    <ServiceContainer id="services">
      <ServiceHeading>My Services</ServiceHeading>
      <ServiceWrapper>
        <ServiceCard>
          <ServiceIcon src="/icons/design.svg" alt="Design Icon" />
          <ServiceTitle>Web Design</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            posuere arcu vitae imperdiet hendrerit.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src="/icons/code.svg" alt="Code Icon" />
          <ServiceTitle>Frontend Development</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            posuere arcu vitae imperdiet hendrerit.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src="/icons/seo.svg" alt="SEO Icon" />
          <ServiceTitle>SEO</ServiceTitle>
          <ServiceDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            posuere arcu vitae imperdiet hendrerit.
          </ServiceDescription>
        </ServiceCard>
      </ServiceWrapper>
    </ServiceContainer>
  );
};

export default ServiceSection;
