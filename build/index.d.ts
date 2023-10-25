/**
 * A finite state machine
 */
export declare type StateMachine = {
    [stateName: string]: string[];
};
/**
 * Finite state machine options
 */
export declare type StateMachineOptions = {
    throwError: boolean;
    allowSelfTransitions: boolean;
};
/**
 * Validate a state transition
 *
 * @param {StateMachine} stateMachine The state machine to check
 * @param {string} fromState The current state
 * @param {string} toState The state we want to transition to
 * @param {Partial<StateMachineOptions>} [options={}] Options for configuring the state
 * machine validator
 */
export declare function validateTransition(stateMachine: StateMachine, fromState: string, toState: string, options?: Partial<StateMachineOptions>): boolean;
