import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectFlat } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  render() {

    const style = {
      marginBottom: "24px",
      marginTop: "24px",
      marginLeft: "4px",
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      justifyContent: "center"
    };

    return (
      <div style={style} className="flat card-trip">
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFlat: selectFlat }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Flat);
