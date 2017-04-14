import { fromJS } from 'immutable';

const defaultState = fromJS({
  initialDate: undefined,
  finalDate: undefined,
  itinerary: [],
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LOCATIONS_FULFILLED': {
      return state.set('itinerary', action.payload);
    }

    default:
      return state;
  }
}
