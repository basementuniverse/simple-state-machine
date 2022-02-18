import {
  StateMachine,
  validateTransition,
} from '../index';

describe('validateTransition', () => {
  const testStateMachine: StateMachine = {
    open: [
      'closedAndUnlocked',
    ],
    closedAndUnlocked: [
      'open',
      'closedAndLocked',
    ],
    closedAndLocked: [
      'closedAndUnlocked',
    ],
  };

  it('should return false when an invalid from state is provided', () => {
    expect(
      validateTransition(
        testStateMachine,
        'invalidState',
        'open'
      )
    ).toBeFalsy();
  });

  it('should return false when an invalid to state is provided', () => {
    expect(
      validateTransition(
        testStateMachine,
        'open',
        'invalidState'
      )
    ).toBeFalsy();
  });

  it('should return false when a transition is not valid', () => {
    expect(
      validateTransition(
        testStateMachine,
        'open',
        'closedAndLocked'
      )
    ).toBeFalsy();

    expect(
      validateTransition(
        testStateMachine,
        'closedAndLocked',
        'open'
      )
    ).toBeFalsy();
  });

  it('should return true when a transition is valid', () => {
    expect(
      validateTransition(
        testStateMachine,
        'open',
        'closedAndUnlocked'
      )
    ).toBeTruthy();

    expect(
      validateTransition(
        testStateMachine,
        'closedAndUnlocked',
        'closedAndLocked'
      )
    ).toBeTruthy();

    expect(
      validateTransition(
        testStateMachine,
        'open',
        'closedAndUnlocked',
        true
      )
    ).toBeTruthy();

    expect(
      validateTransition(
        testStateMachine,
        'closedAndUnlocked',
        'closedAndLocked',
        true
      )
    ).toBeTruthy();
  });

  it('should throw an error when an invalid from state is provided', () => {
    expect(
      () => validateTransition(
        testStateMachine,
        'invalidState',
        'open',
        true
      )
    ).toThrowError(
      /Invalid 'from' state: 'invalidState' does not exist\./
    );
  });

  it('should throw an error when an invalid to state is provided', () => {
    expect(
      () => validateTransition(
        testStateMachine,
        'open',
        'invalidState',
        true
      )
    ).toThrowError(
      /Invalid 'to' state: 'invalidState' does not exist\./
    );
  });

  it('should throw an error when a transition is not valid', () => {
    expect(
      () => validateTransition(
        testStateMachine,
        'open',
        'closedAndLocked',
        true
      )
    ).toThrowError(
      /Invalid state transition: unable to transition from 'open' to 'closedAndLocked'\./
    );

    expect(
      () => validateTransition(
        testStateMachine,
        'closedAndLocked',
        'open',
        true
      )
    ).toThrowError(
      /Invalid state transition: unable to transition from 'closedAndLocked' to 'open'\./
    );
  });
});
