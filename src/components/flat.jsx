import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  render() {
    return (
      <div class="flat card-trip">
        <img src={this.props.flat.imageUrl} alt="" />
        <div class="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
            <p>Short description here!</p>
          </div>
          <h2 class="card-trip-pricing">
            {this.props.flat.price}
            &nbsp;{this.props.flat.priceCurrency}
          </h2>
          <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-trip-user avatar-bordered" />
        </div>
      </div>

    );
  }
}

export default Flat;
