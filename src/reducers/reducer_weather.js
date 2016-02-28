import {FETCH_WEATHER} from '../actions/index';
export default function(state=[],action){
  switch (action.type) {
    case FETCH_WEATHER:
    //  return state.concat([action.payload.data]); alttaki ile aynı iş
      return [action.payload.data,...state];
  }
  return state;
}
