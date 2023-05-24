import { INCREMENT, DECREMENT } from "../action/counterAction";

const initialState = {
  value: 0,
};

function counterreducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return state.value > 0 ? { value: state.value - 1 } : { value: 0 };
    default:
      return state;
  }
}
export default counterreducer;
