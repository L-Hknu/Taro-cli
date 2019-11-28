
import { useEffect, useLayoutEffect, useReducer,useContext, useState, useRef, useCallback, useMemo } from '@tarojs/taro'

const myContext = Taro.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return {count:0};
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [name, setName] = useState({
      name:'王伟'
    })
  return (
    <myContext.Provider value={{ state, dispatch ,name, setName}}>
      {props.children}
    </myContext.Provider>
  );
};

export { reducer, myContext, ContextProvider };