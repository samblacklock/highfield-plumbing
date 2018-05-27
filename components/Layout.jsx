import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import '../node_modules/modern-normalize/modern-normalize.css';
import * as common from './commonStyles';

const Layout = props => (
  <Fragment>
    <Head>
      <title>{ props.title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300" rel="stylesheet" />
      <link rel="icon" type="image/png" href="../static/img/flame.png" />
    </Head>
    <section>

      <Header />

      { props.children }

      <Footer />


      <style jsx global>
        {`
          html {
            background-color: ${common.white}
          }

          body {
            margin: 0;
            font-family: 'Open Sans', sans-serif
          }

          a,
          h1,
          h2,
          h3 {
            font-family: Raleway
            text-transform: uppercase
          }

          a {
            color: ${common.black}
            text-decoration: none
            transition: 0.2s color linear;
            
            &:hover {
              color: ${common.primary}
            }
          }
        `}
      </style>
    </section>
  </Fragment>
);

Layout.defaultProps = {
  title: 'Highfield Plumbing and Heating'
};

/* eslint-disable react/forbid-prop-types */
Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string
};

export default Layout;
