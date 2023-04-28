import { Component } from "react";

import "./Card.style.css";

class Card extends Component {
  state = {};

  render() {

    const {id, name, email} = this.props.user

    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
