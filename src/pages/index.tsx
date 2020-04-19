import Layout from '../components/Layout';
import css from '../styles/main.scss';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
    <div className={css.example}>Hello World!</div>
    </p>
  </Layout>
);

export default IndexPage;
