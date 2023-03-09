import React from 'react'
import { IFormVal } from './ContextSample'

const Child4 = (props:{formVal:IFormVal}) => {
  return (
    <>
    <div>Child4</div>
    <div>USER Name:{props.formVal.username}</div>
    </>
  )
}

export default Child4