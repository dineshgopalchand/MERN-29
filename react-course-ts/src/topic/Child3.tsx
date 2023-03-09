import React from "react";
import Child4 from "./Child4";
import { IFormVal } from "./ContextSample";

const Child3 = (props:{formVal:IFormVal}) => {
  return (
    <>
      <div>Child3</div>
      <Child4 {...props}/>
    </>
  );
};

export default Child3;
