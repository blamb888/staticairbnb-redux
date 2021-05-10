import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  render() {
    return (
      <div className="flat card-trip">
        <img id="cardImage" src={this.props.flat.imageUrl} alt="" />
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
            <p>Short description here!</p>
          </div>
          <h2 className="card-trip-pricing">
            {this.props.flat.price}
            &nbsp;{this.props.flat.priceCurrency}
          </h2>
          <img src="https://kitt.lewagon.com/placeholder/users/krokrob" className="card-trip-user avatar-bordered" alt="" />
        </div>
      </div>

    );
  }
}

export default Flat;
