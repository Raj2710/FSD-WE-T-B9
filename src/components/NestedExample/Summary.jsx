import React, { useContext } from 'react'
import { NestedContext } from '../../utils/NestedContextWrapper'
function Summary() {

  let {name,email} = useContext(NestedContext)
  return <>
    <h1>Summary</h1>
    <div>Current User: {name} - {email}</div>
    </>
}

export default Summary