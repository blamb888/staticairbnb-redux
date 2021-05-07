import React, { Component } from 'react';

class Flat extends Component {
  render() {

    const style = {
      //linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${this.props.flat.imageUrl})`
    };

    return(
      <div className="card-trip">
        <img src={style} />
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
            <p></p>
          </div>
          <h2 className="card-trip-pricing">{this.props.flat.price}{this.props.flat.priceCurrency}</h2>
        </div>
      </div>

    );
  }
}

export default Flat;
