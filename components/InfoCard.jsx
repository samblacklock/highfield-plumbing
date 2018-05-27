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
          filter: grayscale(90%)
          height: 100%
          mix-blend-mode: multiply
          object-fit: cover
          object-position: center
          width: 100%
        }

        .info-card {
          align-items: center
          background: linear-gradient(to bottom right, ${hexToRgba(black, 60)}, ${secondary})
          background-size: cover
          box-shadow: ${boxShadow}
          display: flex
          height: 20rem
          justify-content: center
          overflow: hidden
          position: relative
          width: 20rem

          .inner {
            color: ${white}
            padding: 1rem
            position: absolute
            text-align: center
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

