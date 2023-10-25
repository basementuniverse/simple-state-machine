"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTransition = void 0;
const defaultStateMachineOptions = {
    throwError: false,
    allowSelfTransitions: true,
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
function validateTransition(stateMachine, fromState, toState, options = {}) {
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
            throw new Error(`Invalid state transition: unable to transition from '${fromState}' to '${toState}'.`);
        }
        return false;
    }
    return true;
}
exports.validateTransition = validateTransition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFlQSxNQUFNLDBCQUEwQixHQUF3QjtJQUN0RCxVQUFVLEVBQUUsS0FBSztJQUNqQixvQkFBb0IsRUFBRSxJQUFJO0NBQzNCLENBQUE7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLGtCQUFrQixDQUNoQyxZQUEwQixFQUMxQixTQUFpQixFQUNqQixPQUFlLEVBQ2YsVUFBd0MsRUFBRTtJQUUxQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUU3RSxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksWUFBWSxDQUFDLEVBQUU7UUFDaEMsSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLFNBQVMsbUJBQW1CLENBQUMsQ0FBQztTQUN6RTtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLEVBQUU7UUFDOUIsSUFBSSxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLE9BQU8sbUJBQW1CLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUM5QyxJQUFJLFNBQVMsS0FBSyxPQUFPLElBQUksYUFBYSxDQUFDLG9CQUFvQixFQUFFO1lBQy9ELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FDYix3REFBd0QsU0FBUyxTQUFTLE9BQU8sSUFBSSxDQUN0RixDQUFDO1NBQ0g7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBdkNELGdEQXVDQyJ9