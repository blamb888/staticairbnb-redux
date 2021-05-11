import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Flat from '../components/flat';
import setFlats from '../actions';
// eslint-disable-next-line react/prefer-stateless-function
class Flatlist extends Component {

  // TEMPORARY CODE TO INTEGRATE HTML
  // static defaultProps = {
    //   flats: [{
  //     name: "Charm at the Steps of Montmartre",
  //     imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //     price: 164,
  //     priceCurrency: "EUR"
  //   }]
  // }

  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        { this.props.flats.map(flat => <Flat flat={flat} key={flat.name} />) }
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}


export default connect(mapStateToProps, mapDispatchToProps) (Flatlist);
