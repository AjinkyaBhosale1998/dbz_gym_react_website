import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Gearitems(props) {
  return (
    <div className="gears col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow" style={{ backgroundColor: 'black' }}>
        <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
        <div className="card-body" style={{ color: 'white' }}>
          <h5 className="card-title" >{props.title}</h5>
          <h5 className="card-title">₹ {props.price}</h5>
          <p className="card-text">{props.desc}</p>
          <button className="btn btn-warning" style={{ position: 'absolute', bottom: '10px', borderRadius: '20px' }}>View Details <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </div>
  );
}

export default Gearitems;
