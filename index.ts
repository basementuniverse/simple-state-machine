/**
 * A finite state machine
 */
export type StateMachine = {
  [stateName: string]: string[];
}

/**
 * Validate a state transition
 * 
 * @param {StateMachine} stateMachine The state machine to check
 * @param {string} fromState The current state
 * @param {string} toState The state we want to transition to
 * @param {boolean} [throwError=false] Throw an error if the state or transition is invalid
 */
export function validateTransition(
  stateMachine: StateMachine,
  fromState: string,
  toState: string,
  throwError: boolean = false
) {
  if (!(fromState in stateMachine)) {
    if (throwError) {
      throw new Error(`Invalid 'from' state: '${fromState}' does not exist.`);
    }

    return false;
  }

  if (!(toState in stateMachine)) {
    if (throwError) {
      throw new Error(`Invalid 'to' state: '${toState}' does not exist.`);
    }

    return false;
  }

  if (!stateMachine[fromState].includes(toState)) {
    if (throwError) {
      throw new Error(
        `Invalid state transition: unable to transition from '${fromState}' to '${toState}'.`
      );
    }

    return false;
  }

  return true;
}
