import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Babyreducer } from "./baby/baby.reducer";

const rootReducer = combineReducers({
    BabyProducts:Babyreducer
})

export const store = legacy_createStore(rootReducer,compose(applyMiddleware(thunk)))