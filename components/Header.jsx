import Link from 'next/link';
import { white, primary } from './commonStyles';

export default () => (
  <header>
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/services"><a>Services</a></Link>
      <Link href="/">
        <a><img src="../static/img/flame.png" alt="flame graphic" /></a>
      </Link>
      <Link href="/bathrooms"><a>Bathrooms</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>

    <style jsx>
      {`
        header {
          align-items: center;
          background: black;
          display: flex;
          height: 2.5rem;
          justify-content: center;
          padding: 1rem 0;
          width: 100%;
        }

        nav {
          align-items: center;
          display: flex;
          height: 90%;
          justify-content: space-between;
          width: 90%;

          a {
            color: ${white}
            letter-spacing: 0.2rem
            font-size: 0.9rem
            flex: 1
            text-align: center

            &:hover {
              color: ${primary}
            }
          }

          img {
            height: auto;
            width: 1.5rem;
          }
        }
      `}
    </style>
  </header>
);
