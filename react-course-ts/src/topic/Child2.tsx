import React from 'react'
import Child3 from './Child3'
import { IFormVal } from './ContextSample'

const Child2 = (props:{formVal:IFormVal}) => {
  return (
    <>
    <div>Child2</div>
    <Child3 {...props}/>
    </>
  )
}

export default Child2