import { State, Effect, Actions } from "jumpstate";

export const globalstate = State("GlobalState", {
  // Initial State should be starts with the key 'initial': ...
  initial: {
    check: 0
  }
});
