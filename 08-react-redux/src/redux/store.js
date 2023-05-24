import {createStore} from "redux"
import counterreducer from "./reducers/counterReducer"

let store = createStore (counterreducer)
export default store