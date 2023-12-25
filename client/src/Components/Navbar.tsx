import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-title">
            <h1>E-Commerce</h1>
        </div>

        <div className="navbar-links">
            <Link to={"/"} >Shop</Link>
            <Link to={"/purchased-items"}>Purchases</Link>
            <Link to={"/checkout"}>Checkout</Link> 
            <Link to={"/auth"}>Logout</Link>
        </div>
    </div>
  )
}
