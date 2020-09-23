import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const UsersItem = ({ user: { login, avatar_url } }) => {




    return (
        <Fragment>
            
            <div className="card text-center" style={{width:"200px", display:"inline"}}>
            <h3 style={{  }} >{login}</h3>
                <img src={avatar_url} alt="Profile pic" className="round-img" style={{ width: "120px" }}></img>
          
            <div>
                <Link style={{ width:"100px" }} to={`/user/${login}`} className="btn btn-dark btn-sm my-1">Profile Link </Link>
            </div>
            </div>
        </Fragment>
    )

}

UsersItem.prototype = {
    user: PropTypes.object.isRequired,
}

export default UsersItem
