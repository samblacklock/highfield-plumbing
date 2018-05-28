import { Fragment } from 'react';
import PropTypes from 'prop-types';
import hexToRgba from 'hex-rgba';
import { primary, secondary, white, black, boxShadow } from './commonStyles';

const InfoCard = props => (
  <Fragment>
    <div className="info-card">
      <img src={`../static/img/${props.img}`} alt="" className="info-card-image" />
      <div className="inner">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>

    <style jsx>
      {`
        img {
          filter: brightness(100%) grayscale(90%)
          height: 100%
          mix-blend-mode: multiply
          object-fit: cover
          object-position: center
          transition: 0.2s filter linear
          width: 100%
        }

        .info-card {
          align-items: flex-end
          background: linear-gradient(to bottom right, ${hexToRgba(black, 60)}, ${secondary})
          background-size: cover
          box-shadow: ${boxShadow}
          display: flex
          height: 20rem
          justify-content: center
          margin: 0.5rem 0
          overflow: hidden
          position: relative
          width: 100%

          .inner {
            color: ${white}
            max-width: 20rem
            padding: 1rem
            position: absolute
            text-align: center
          }

          &:hover {
            img {
              filter: brightness(70%) grayscale(90%)
            }
          }

          @media (min-width: 750px) {
            width: ${props.large ? '100%' : '20rem'}
            margin: 0.5rem
          }
        }
      `}
    </style>
  </Fragment>
);

InfoCard.propTypes = {
  children: PropTypes.any.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default InfoCard;

