import { DECREMENT_COUNT, INCREMENT_COUNT } from "./action-type"

const initialState = {
      count : 0
  }
  
  // Use the initialState as a default value
  export default function rootReducer(state=initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case INCREMENT_COUNT :
      //  console.log("Hello",state.count+1)
      //   // console.log(...state.count)
        return {...state,count:state.count+1}
        case DECREMENT_COUNT :
          return {...state,count:state.count-1}

      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }