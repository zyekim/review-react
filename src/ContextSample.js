
import React,{ createContext, useContext,useState } from "react";

const MyContext = createContext('defaultVal');

function Child(){
  const text = useContext(MyContext);
  return <div>안녕하세요?? {text}</div>
}
function Parent(){
  return <Child />
}

function GrandParent(){
  return <Parent />
}

function ContextSample() {
  const [val, setVal] = useState(true)
  return (
    <MyContext.Provider value={val ? "good" : "bad"}>
      <GrandParent/>
      <button onClick={()=> setVal(!val)}>Click Me</button>
    </MyContext.Provider>
  )
}

export default ContextSample;
