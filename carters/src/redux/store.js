import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Babyreducer } from "./baby/baby.reducer";
import { Kidsreducer } from "./kids/kids.reducer";
import { AuthReducer } from "./Authentication/Auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { orderReducer } from "./orders/orders.reducer";
const rootReducer = combineReducers({
    BabyProducts:Babyreducer,
    KidsProducts:Kidsreducer,
    AuthUser:AuthReducer,
    CartData:cartReducer,
    orderData:orderReducer
})

export const store = legacy_createStore(rootReducer,compose(applyMiddleware(thunk)))