import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Babyreducer } from "./baby/baby.reducer";
import { Kidsreducer } from "./kids/kids.reducer";

const rootReducer = combineReducers({
    BabyProducts:Babyreducer,
    KidsProducts:Kidsreducer

})

export const store = legacy_createStore(rootReducer,compose(applyMiddleware(thunk)))