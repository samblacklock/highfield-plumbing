import Gallery from 'react-grid-gallery';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../components/Layout';

const gallery = () => {
  const grid = [];
  for (let i = 1; i <= 3; i++) {
    grid.push(
      <img key={i} alt="services" src={`../static/img/services-gallery/${i}-comp.jpg`} />
    );
  }

  return grid;
};

export default () => (
  <Layout>
    <Carousel dynamicHeight>
      {gallery().map(i => i)}
    </Carousel>

    <section>
      <h1>Our Services</h1>

      <div className="content-wrapper">
        <h2>Heating</h2>
        <p>
        No matter the size of your heating and hot water demands, we always find the most efficient, cost effective solution.
        </p>

        <h2>Gas</h2>
        <p>
          All makes and models of gas appliance covered, from annual servicing and landlord safety certificates to emergency breakdowns and installations of the most up to date high efficiency boilers.
        </p>

        <h2>Plumbing</h2>
        <p>
          Full bathroom refurbishments to dripping taps and blocked drains
        </p>
      </div>
    </section>

    <style jsx>
      {`
        section {
          align-items: center
          display: flex
          justify-content: center
          padding: 1rem
          text-align: center
        }

        h1 {
          font-size: 8rem
        }

        .content-wrapper {
          max-width: 40rem
          padding-left: 2rem
          text-align: left
        }
      `}
    </style>

    <style jsx global>
      {`
        .carousel {
          max-height: 40rem
        }

        .thumbs {
          align-items: flex-end
          display: flex
          justify-content: center
        }
      `}
    </style>
  </Layout>
);
