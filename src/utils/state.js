const functions = {};
const lastValues = {};
let currentState = {};
const stateTimeline = [];

const subscribe = (path, fn) => {
  if (!functions[path]) functions[path] = [];
  if (functions[path].indexOf(fn) < 0) functions[path].push(fn);
  if (lastValues[path]) fn(lastValues[path]);
};

const unsubscribe = (path, fn) => {
  const index = functions[path].indexOf(fn);
  if (index >= 0) functions[path].splice(index, 1);
};

const reducer = (path, state = {}, value) => {
  const obj = {};
  obj[path] = value;
  return { ...state, ...obj };
};

async function dispatch (path, value) {
  await Promise.resolve();
  const fns = functions[path];
  lastValues[path] = value;
  if (fns) {
    for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      fn(value);
    }
  }
}

function updateState (path, value) {
  currentState = reducer(path, currentState, value);
  if (stateTimeline.length >= 1000) {
    stateTimeline.pop();
  }
  stateTimeline.unshift(currentState);
  return dispatch(path, value);
}

export { subscribe, unsubscribe, dispatch, updateState };
