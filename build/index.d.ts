/**
 * A finite state machine
 */
export declare type StateMachine = {
    [stateName: string]: string[];
};
/**
 * Validate a state transition
 *
 * @param {StateMachine} stateMachine The state machine to check
 * @param {string} fromState The current state
 * @param {string} toState The state we want to transition to
 * @param {boolean} [throwError=false] Throw an error if the state or transition is invalid
 */
export declare function validateTransition(stateMachine: StateMachine, fromState: string, toState: string, throwError?: boolean): boolean;
