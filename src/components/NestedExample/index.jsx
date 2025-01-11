import React from 'react'
import { Outlet,Link } from 'react-router'

function NestedExample() {
return <>
    <div className="d-sm-flex align-items-center justify-content-between mt-4 mb-4">
        <h1 className="h3 mb-0 text-gray-800">NestedExample</h1>
    </div>
    <div className='container-fluid'>
        <ul>
            <li> <Link to='summary'>Accounts Summary </Link></li>
            <li> <Link to='inbound'>Accounts Inbound </Link></li>
            <li> <Link to='outbound'>Accounts Outbound </Link></li>
            <li> <Link to='reports'>Reports </Link></li>
        </ul>

        <Outlet/>
    </div>

  </>
}

export default NestedExample