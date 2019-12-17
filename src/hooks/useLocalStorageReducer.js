import { useReducer, useEffect } from 'react';
function UseLocalStorageReducer(key, defaultVal, reducer) {

  // create state depending on localStorage otherwise use defaultVal
  // dispatch methods created from reducer passed into the function
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
    }
    catch (e) {
      val = defaultVal;
    }
    return val;
  })

  // only update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, dispatch];
}

export default UseLocalStorageReducer;