import { useState } from 'react';
const Card = ({ character }) => {
  const { name, gender, image, status, type, url, species, location, origin } =
    character;

  const [statusBg, setStatusBg] = useState('');

  const checkStatus = () => {
    if (status === 'Alive') {
      setStatusBg('bg-primary');
    } else if (status === 'Dead') {
      setStatusBg('bg-danger');
    } else {
      setStatusBg('bg-warning text-dark');
    }
  };

  return (
    // <div className='col-lg position-relative ' style={{ minWidth: '15rem' }}>
    //   <img src={image} alt={name} className='img-fluid' />
    //   <div className='content'>
    //     <h2 className='fs-4 fw-bold mb-3'>{name}</h2>
    //     <div>
    //       <p>Gender: {gender}</p>
    //       <p className='fs-6'>
    //         Last Location: <br /> <span className='fs-5'>{location?.name}</span>
    //       </p>
    //       <p>{species}</p>
    //     </div>
    //   </div>
    //   {/* FIXME: This is not working */}
    //   <div
    //     className={`${styles.badge} position-absolute badge badge-primary ${status}`}
    //   >
    //     {status}
    //   </div>
    // </div>

    <div className='col-sm relative' style={{ minWidth: '15rem' }}>
      <div
        className='card border-2 border-success'
        style={{ paddingLeft: '0px', paddingRight: '0px' }}
      >
        <img src={image} className='card-img-top img-fluid' alt={name} />
        <div className='card-body'>
          <h3 className='card-title mb-1'>{name}</h3>
          <p className='card-text'>{type}</p>
          <p className='card-text mb-1'>{species}</p>
          <p className='card-text mb-1 '>
            <div className='text-muted'>Location:</div>
            {location?.name}
          </p>
          <p className='card-text mb-1'>Origin: {origin?.name}</p>
          {/* Status */}
          {status && status === 'Alive' ? (
            <div
              className={`badge rounded-pill bg-success position-absolute`}
              style={{ top: '10px', right: '20px' }}
            >
              {status}
            </div>
          ) : status === 'Dead' ? (
            <div
              className={`badge rounded-pill bg-danger position-absolute`}
              style={{ top: '10px', right: '20px' }}
            >
              {status}
            </div>
          ) : (
            <div
              className={`badge rounded-pill bg-warning text-dark position-absolute`}
              style={{ top: '10px', right: '20px' }}
            >
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
