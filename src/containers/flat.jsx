import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectFlat } from '../actions';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const style = {
      marginBottom: "4px",
      marginTop: "4px",
      marginLeft: "4px",
      display: "flex",
      flexWrap: "wrap",
      listStyle: "none",
      justifyContent: "center"
    };

    let classes = "flat card-trip";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }

    return (
      <div style={style} className={classes} onClick={this.handleClick}>
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
