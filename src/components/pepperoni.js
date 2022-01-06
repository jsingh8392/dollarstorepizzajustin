import React from 'react';
import pepperoni from './images/pepperoni.jpg';
import './css/slice.css';

function Pepperoni(props) {
  return(
    <div className="Pepperoni col-4">
      <div className="card">
        <img src={ pepperoni } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.price}</li>
        </ul>
      </div>
    </div>
  );
}

export default Pepperoni;