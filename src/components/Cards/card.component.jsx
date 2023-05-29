import styles from './card.module.scss'
const Card = ({ character }) => {
  // console.log(character);

  const { name, gender, image, status, type, url, species, location } =
    character;

  return (
    <div className="col-md-4 col-sm-6 position-relative">
      <img src={image} alt={name} className="img-fluid" />
      <div className="content">
        <h2 className="fs-4 fw-bold mb-3">{name}</h2>
        <div>
          <p>Gender: {gender}</p>
          <p className="fs-6">
            Last Location: <br /> <span className="fs-5">{location?.name}</span>
          </p>
          <p>{species}</p>
        </div>
      </div>
      {/* FIXME: This is not working */}
      <div className={`${styles.badge} position-absolute badge badge-primary`}>
          {status}
      </div>
    </div>
  );
};
export default Card;
