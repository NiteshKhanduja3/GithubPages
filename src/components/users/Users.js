import React from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UsersItem'
import PropTypes from 'prop-types'
const Users = ({ users, loading }) => {


    if (loading) {
        return <Spinner />
    }
    else {
        return (
            <div style={UserStyle}>
                {
                    users.map(user => (
                        <UserItem key={user.id} user={user} />
                    )
                    )
                }

            </div>
        )

    }



}
// type checking 
Users.prototype = {
    users: PropTypes.array.isReequired,
    loading: PropTypes.bool.isReequired
}


const UserStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,3fr)',
    gridGap: '1rem',
}
export default Users
