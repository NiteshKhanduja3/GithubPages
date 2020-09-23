import React, { useEffect, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({ user, loading, getUser, match }) => {


    useEffect(() => {
        getUser(match.params.login)
        //eslint-disable-next-line
}, []) // component did Mount we use this and we add [] empty for component did mount


    const { name,
        avatar_url,
        location,
        company,
        bio,
        login,
        html_url,
        hireable } = user




    if (loading) return <Spinner />

    return <Fragment>
        <Link to='/' className='btn btn-light'>Back to home search
           </Link>

        <h1>
            {name}
        </h1>

            Hireable: {' '}
        {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}

        <div className="card grid-2">
            <div className="all-center">
                <img src={avatar_url}
                    className="round-img"
                    alt=""
                    style={{width:"120px"}}
                    ></img>

                <p>Location :   {location}</p>



            </div>

            <div>
                {bio && (<Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p></Fragment>)}
                <a href={html_url} className="btn btn-dark my-1">
                    Visit github Profile
                   </a>

                {login && <Fragment>
                    <ul>
                        <li>
                            <strong>
                                Username: {login}
                            </strong></li>
                        <li>
                            <strong>
                                COmpany: {company}
                            </strong>
                        </li>
                    </ul>
                </Fragment>}
            </div>



        </div>

    </Fragment>


}

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
}

export default User
