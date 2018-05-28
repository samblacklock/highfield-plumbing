import Gallery from 'react-grid-gallery';
import Layout from '../components/Layout';

const buildGrid = () => {
  const grid = [];
  for (let i = 1; i <= 15; i++) {
    grid.push({
      src: `../static/img/services-gallery/${i}.jpg`,
      thumbnail: `../static/img/services-gallery/${i}.jpg`,
      thumbnailWidth: 150,
      thumbnailHeight: 200
    });
  }

  return grid;
};

export default () => (
  <Layout>

    <section>
      <h1>Our Services</h1>
      <Gallery
        images={buildGrid()}
        enableImageSelection={false}
      />
    </section>

    <style jsx>
      {`
        section {
          flex: 1
          padding: 1rem
          text-align: center
        }
      `}
    </style>
  </Layout>
);
