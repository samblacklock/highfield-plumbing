import Layout from '../components/Layout';
import LinkButton from '../components/LinkButton';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';

export default () => (
  <Layout>
    <Hero />

    <section>
      <h1>Our Services</h1>

      <p className="subheading">We provide an honest, prompt and reliable service, covering gas installation, service, repair, heating, and plumbing</p>

      <div className="info-wrapper">
        <InfoCard img="heating.jpg" title="Heating">
          <p>
            No matter the size of your heating and hot water demands, we always find the most efficient, cost effective solution.
          </p>
          <LinkButton href="/services">Find out more</LinkButton>
        </InfoCard>

        <InfoCard img="gas.jpg" title="Servicing">
          <p>
            All makes and models of gas appliance covered, from annual servicing and landlord safety certificates to emergency breakdowns and installations of the most up to date high efficiency boilers.
          </p>
          <LinkButton href="/services">Find out more</LinkButton>
        </InfoCard>

        <InfoCard img="plumbing.jpg" title="Plumbing">
          <p>
            Full bathroom refurbishments, to dripping taps and blocked drains
          </p>
          <LinkButton href="/services">Find out more</LinkButton>
        </InfoCard>
      </div>

      <div className="info-wrapper">
        <InfoCard img="bathroom.jpg" title="bathrooms" large>
          <p>
            Full bathroom refurbishments, to dripping taps and blocked drains
          </p>
          <LinkButton href="/services">Find out more</LinkButton>
        </InfoCard>
      </div>
    </section>

    <style jsx>
      {`
        section {
          flex: 1
          padding: 1rem
          text-align: center
        }

        .info-wrapper {
          display: flex
          flex-direction: column
          justify-content: center
          margin: 0 auto
          max-width: 60rem

          @media (min-width: 750px) {
            flex-direction: row
          }
        }

        .subheading {
          font-style: italic
        }
      `}
    </style>
  </Layout>
);
