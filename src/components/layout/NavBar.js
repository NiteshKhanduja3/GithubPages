import React, {  } from 'react'
import  { Link } from 'react-router-dom'
// type checking
import PropTypes from 'prop-types'

 const NavBar = (props)=> {
    
   
        return (
            
            <div className="navbar bg-success">
                <h1><i className="fab fa-github"/> {props.title}
                </h1>
                <ul>
                    <li>
                    < Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About  </Link>
                    </li>
                </ul>
               
            </div>
        )
    
}
NavBar.defaultProps={
    title :'GitHub Profile'
}
//  type checking
NavBar.propTypes ={
    title:PropTypes.string.isRequired

}

export default NavBar