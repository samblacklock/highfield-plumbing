import Layout from '../components/Layout';
import { black, primary, secondary } from '../components/commonStyles';

export default () => (
  <Layout>

    <section>
      <h1>Our Services</h1>
    </section>

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
          }
        }
      `}
    </style>
  </Layout>
);
