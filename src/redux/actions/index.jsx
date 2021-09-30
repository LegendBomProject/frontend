import { DECREMENT_COUNT, INCREMENT_COUNT } from "../action-type";

export const incrementCount = () => ({
    type:INCREMENT_COUNT
})

export const decrementCount = () => ({
    type:DECREMENT_COUNT
})