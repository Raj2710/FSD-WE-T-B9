import React from 'react'
export const NestedContext = React.createContext()

function NestedContextWrapper({children}) {
    let user = {name:"Nagarajan",email:"nagarajan2727@gmail.com"}
  return <NestedContext.Provider value={user}>
    {children}
  </NestedContext.Provider>
}

export default NestedContextWrapper