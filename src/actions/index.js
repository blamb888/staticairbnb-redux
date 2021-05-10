import flats from '../flats';

export default function setFlats() {
// TODO: Api call! For now, simulate a DB

  return {
    type: 'SET_FLATS',
    payload: flats
  };
}
