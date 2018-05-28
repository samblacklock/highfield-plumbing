import { Fragment } from 'react';
import Link from 'next/link';
import { white } from './commonStyles';

export default props => (
  <Fragment>
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>

    <style jsx>
      {`
        a {
          align-items: center
          background: ${white}
          border-radius: 0.25rem
          display: flex
          height: 2rem
          justify-content: center
          margin-top: 1.5rem
          width: 100%
        }
      `}
    </style>
  </Fragment>
);
