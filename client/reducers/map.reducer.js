import { fromJS } from 'immutable';

const defaultState = fromJS({
  initialDate: undefined,
  finalDate: undefined,
  itinerary: [],
});

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
