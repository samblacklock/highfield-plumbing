import PropTypes from 'prop-types';

const InfoCard = props => (
  <>
    <div className="info-card">
      <div className="image" />
      <div className="body">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </div>

    <style jsx>
      {`
        .info-card {
          .image {
            background-image: url(${props.img});
          }
        }
      `}
    </style>
  </>
);

InfoCard.propTypes = {
  children: PropTypes.any.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default InfoCard;

