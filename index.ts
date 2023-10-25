/**
 * A finite state machine
 */
export type StateMachine = {
  [stateName: string]: string[];
}

/**
 * Finite state machine options
 */
export type StateMachineOptions = {
  throwError: boolean;
  allowSelfTransitions: boolean;
}

const defaultStateMachineOptions: StateMachineOptions = {
  throwError: false,
  allowSelfTransitions: true,
}

/**
 * Validate a state transition
 *
 * @param {StateMachine} stateMachine The state machine to check
 * @param {string} fromState The current state
 * @param {string} toState The state we want to transition to
 * @param {Partial<StateMachineOptions>} [options={}] Options for configuring the state
 * machine validator
 */
export function validateTransition(
  stateMachine: StateMachine,
  fromState: string,
  toState: string,
  options: Partial<StateMachineOptions> = {}
) {
  const actualOptions = Object.assign({}, defaultStateMachineOptions, options);

  if (!(fromState in stateMachine)) {
    if (actualOptions.throwError) {
      throw new Error(`Invalid 'from' state: '${fromState}' does not exist.`);
    }

    return false;
  }

  if (!(toState in stateMachine)) {
    if (actualOptions.throwError) {
      throw new Error(`Invalid 'to' state: '${toState}' does not exist.`);
    }

    return false;
  }

  if (!stateMachine[fromState].includes(toState)) {
    if (fromState === toState && actualOptions.allowSelfTransitions) {
      return true;
    }

    if (actualOptions.throwError) {
      throw new Error(
        `Invalid state transition: unable to transition from '${fromState}' to '${toState}'.`
      );
    }

    return false;
  }

  return true;
}
