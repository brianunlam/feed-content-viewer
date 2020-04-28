import Layout from '../components/Layout';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Title>Hello Next.js 👋👋👋👋👋👋</Title>
    <p>
      <div>Hello World with styled components!</div>
    </p>
  </Layout>
);

export default IndexPage;
