import hexToRgba from 'hex-rgba';
import { primary, white, textShadow } from './commonStyles';

export default () => (
  <section>
    <img src="../static/img/background_2.jpg" alt="tools on a bench" />
    <div className="hero-inner">
      <h1>HIGHFIELD PLUMBING AND HEATING</h1>
      <p>All aspects of gas installation, service, repair, heating and plumbing from a well established family company based in the North East</p>
    </div>
    <style jsx>
      {`
        section {
          align-items: center
          background: ${primary}
          background-size: cover
          display: flex
          height: 30rem
          justify-content: center
          overflow: hidden
          position: relative
          width: 100%

          img {
            filter: grayscale(90%)
            height: 100%;
            mix-blend-mode: multiply
            object-fit: cover
            object-position: center
            width: 100%
          }
        }

        h1 {
          font-size: 3rem
          color: ${white}
          margin-top: 0
          text-shadow: ${textShadow}
          z-index: 1
        }

        .hero-inner {
          position: absolute
          text-align: center
          width: 80%

          p {
            color: ${white}
            text-shadow: ${textShadow}
          }
        }
        
      `}
    </style>
  </section>
);

//, url(../static/img/background_2.jpg) no-repeat center