import { Fragment } from 'react';
import Link from 'next/link';
import { black, white } from './commonStyles';

export default () => (
  <Fragment>
    <footer>
      Highfield Plumbing and Heating, {new Date().getFullYear()}
    </footer>

    <style jsx>
      {`
        footer {
          align-items: center;
          background: ${black}
          color: ${white}
          display: flex
          font-size: 0.7rem
          height: 2rem
          justify-content: center
          margin-top: auto
          padding: 0 1rem
        }
      `}
    </style>
  </Fragment>
);
