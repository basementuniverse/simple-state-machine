# Simple State Machine

Define finite state machines and validate state transitions.

This library doesn't currently provide state-change events or methods for transitioning between states; all it does is provide a format for defining state machines, and a method for checking that a given transition is valid.

## Installation

```
npm install @basementuniverse/simple-state-machine
```

## Usage

```typescript
import {
  StateMachine,
  validateTransition,
} from '@basementuniverse/simple-state-machine';

// Define a finite state machine
const myStateMachine: StateMachine = {
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

// Let's validate some transitions...
let result: boolean = false;

// Test #1
result = validateTransition(
  myStateMachine,
  'open',
  'closedAndUnlocked'
);

// result will be true (this is a valid transition)
console.assert(result);


// Test #2
result = validateTransition(
  myStateMachine,
  'closedAndLocked',
  'open'
);

// result will be false (this is not a valid transition)
console.assert(!result);


// Test #3
result = validateTransition(
  myStateMachine,
  'open',
  'closedAndLocked',
  true
);
// this will throw an error with the message:
// "Invalid state transition: unable to transition from 'open' to 'closedAndLocked'."
```
