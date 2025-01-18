import React, { useContext } from 'react'
import { NestedContext } from '../../utils/NestedContextWrapper'

function Reports() {
  let {name,email} = useContext(NestedContext)
  return <>
  <h1>Reports</h1>
  <div>Current User: {name} - {email}</div>
  </>
}

export default Reports