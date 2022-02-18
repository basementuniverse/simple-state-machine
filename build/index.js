"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTransition = void 0;
/**
 * Validate a state transition
 *
 * @param {StateMachine} stateMachine The state machine to check
 * @param {string} fromState The current state
 * @param {string} toState The state we want to transition to
 * @param {boolean} [throwError=false] Throw an error if the state or transition is invalid
 */
function validateTransition(stateMachine, fromState, toState, throwError = false) {
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
            throw new Error(`Invalid state transition: unable to transition from '${fromState}' to '${toState}'.`);
        }
        return false;
    }
    return true;
}
exports.validateTransition = validateTransition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQTs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQ2hDLFlBQTBCLEVBQzFCLFNBQWlCLEVBQ2pCLE9BQWUsRUFDZixhQUFzQixLQUFLO0lBRTNCLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxZQUFZLENBQUMsRUFBRTtRQUNoQyxJQUFJLFVBQVUsRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLFNBQVMsbUJBQW1CLENBQUMsQ0FBQztTQUN6RTtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLEVBQUU7UUFDOUIsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixPQUFPLG1CQUFtQixDQUFDLENBQUM7U0FDckU7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDOUMsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUNiLHdEQUF3RCxTQUFTLFNBQVMsT0FBTyxJQUFJLENBQ3RGLENBQUM7U0FDSDtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFqQ0QsZ0RBaUNDIn0=