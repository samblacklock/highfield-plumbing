import Layout from '../components/Layout';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';

export default () => (
  <Layout>
    <Hero />

    <section>
      <h1>Our Services</h1>

      <div className="info-wrapper">
        <InfoCard img="heating.jpg" title="Heating">
          No matter the size of your heating and hot water demands, we always find the most efficient, cost effective solution.
        </InfoCard>

        <InfoCard img="gas.jpg" title="Servicing">
          All makes and models of gas appliance covered, from annual servicing and landlord safety certificates to emergency breakdowns and installations of the most up to date high efficiency boilers.
        </InfoCard>

        <InfoCard img="plumbing.jpg" title="Plumbing">
          Full bathroom refurbishments, to dripping taps and blocked drains
        </InfoCard>
      </div>
    </section>

    <style jsx>
      {`
        section {
          padding: 1rem
          text-align: center
        }

        .info-wrapper {
          display: flex
          flex-direction: row-wrap
          justify-content: space-between
        }
      `}
    </style>
  </Layout>
);
