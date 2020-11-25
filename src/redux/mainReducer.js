import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp22178795Reducer from '../features/SignUp22178795/redux/reducers'
import SignIn43178794Reducer from '../features/SignIn43178794/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp22178795: SignUp22178795Reducer,
SignIn43178794: SignIn43178794Reducer,

});