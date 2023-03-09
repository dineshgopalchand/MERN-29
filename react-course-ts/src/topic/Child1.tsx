import React from "react";
import Child2 from "./Child2";
import { IFormVal } from "./ContextSample";

const Child1 = (props:{formVal:IFormVal}) => {
  return (
    <>
      <div>Child1</div>
      <Child2  {...props}/>
    </>
  );
};

export default Child1;
