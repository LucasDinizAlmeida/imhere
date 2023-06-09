import React from 'react';
import { Container, Title, SubTitle } from './styles';

interface Props {
  title: string
  subtitle: string
}

export function Highlight({ subtitle, title }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}