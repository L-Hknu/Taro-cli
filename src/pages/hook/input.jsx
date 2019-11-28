import { useEffect, useLayoutEffect, useReducer,useContext, useState, useRef, useCallback, useMemo } from '@tarojs/taro'

import { myContext } from "./reducer";
import { AtButton } from 'taro-ui'

function Input ()  {
    const {state ,dispatch ,setName,name}=useContext(myContext)
    return (
        <div>
            <AtButton onClick={()=> setName({name:'李伟'})}>改名</AtButton>
            {name.name}
        </div>
    )
}
export default Input