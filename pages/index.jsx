import Layout from '../components/Layout';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';

export default () => (
  <Layout>
    <Hero />

    <section>
      <h1>Our Services</h1>

      <InfoCard img={''} title="Heating">
        No matter the size of your heating and hot water demands, we always find the most efficient, cost effective solution.
      </InfoCard>
    </section>
  </Layout>
);
