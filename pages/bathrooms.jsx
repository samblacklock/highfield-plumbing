import Layout from '../components/Layout';
import { secondary, white } from '../components/commonStyles';
import { Carousel } from 'react-responsive-carousel';

const gallery = () => {
  const grid = [];
  for (let i = 1; i <= 5; i++) {
    grid.push(
      <img key={i} alt="services" src={`../static/img/bathroom-gallery/${i}.jpg`} />
    );
  }

  return grid;
};

export default () => (
  <Layout>
    <section>
      <h1>Bathrooms</h1>

    </section>

    <div className="carousel-wrapper">
      <Carousel dynamicHeight>
        {gallery().map(i => i)}
      </Carousel>
    </div>

    <style jsx>
      {`
        section {
          background: url('../static/img/bathroom2.jpg') no-repeat center
          background-size: cover
          filter: grayscale(50%)
          flex: 1
          padding: 1rem
          position: relative
          text-align: center

          &:after {
            background: ${secondary}
            mix-blend-mode: multiply
            content: ''
            height: 100%
            position: absolute
            left: 0
            top: 0
            width: 100%
            z-index: 0
          }
        }

        h1 {
          color: ${white}
          font-size: 8rem
        }

        .carousel-wrapper {
          position: absolute
          left: 50%
          top: 60%
          transform: translate(-50%, -50%)
          width: 30rem
        }
      `}
    </style>
  </Layout>
);
