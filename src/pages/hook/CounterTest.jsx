import { useEffect, useLayoutEffect, useReducer,useContext, useState, useRef, useCallback, useMemo } from '@tarojs/taro'
import { myContext } from "./reducer";
import { AtButton } from 'taro-ui'

function CounterTest() {
  const { state, dispatch } = useContext(myContext);
  return (
    <div>
      CounterTest Count: {state.count}
      <AtButton onClick={() => dispatch({ type: "reset" })}>Reset</AtButton>
      <AtButton onClick={() => dispatch({ type: "increment" })}>+</AtButton>
      <AtButton onClick={() => dispatch({ type: "decrement" })}>-</AtButton>
    </div>
  );
}

export default CounterTest;