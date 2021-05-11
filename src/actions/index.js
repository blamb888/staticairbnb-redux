import flats from '../reducers/flats';

function setFlats() {
  return {
    type: 'SET_FLATS',
    payload: flats
  };
}

export default setFlats;
