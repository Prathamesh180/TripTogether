import React from 'react';
import styled from 'styled-components';

const Contact = styled.section`
  padding: 5rem 2rem;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 50%;
    padding-right: 1rem;
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primaryColor};
  }
`;

const TextArea = styled.textarea`
  font-size: 1.6rem;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  resize: vertical;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primaryColor};
  }
`;

const Button = styled.button`
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.whiteColor};
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHoverColor};
  }
`;

function ContactSection() {
  return (
    <Contact id="contact">
      <Heading>Contact Me</Heading>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" name="message" required></TextArea>
        </FormGroup>
        <FormGroup>
          <Button type="submit">Send</Button>
        </FormGroup>
      </Form>
    </Contact>
  );
}

export default ContactSection;
