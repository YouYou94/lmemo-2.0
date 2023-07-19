import { ReactElement } from 'react';
import styled from 'styled-components';

interface TemplateProps {
  children: string | ReactElement | ReactElement[];
}

export const Template = ({ children }: TemplateProps) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.main`
  position: relative;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #f0f5fc;
`;
