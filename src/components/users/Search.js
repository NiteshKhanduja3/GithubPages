import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

    const [text, setText] = useState('')



    const onSubmit = (event) => {

        event.preventDefault()
        if (text === '') {
            setAlert('please enter something to search', 'dark')
        }
        else {
            searchUsers(text)
            console.log(text)
            setText('')
        }

    }
    const onChangeEvent = (event) => {
        setText(event.target.value)
    }



    return (
        <div>
            <form className="form" onSubmit={onSubmit}>

                <input type="text" name="text" placeholder="search users" onChange={onChangeEvent} value={text} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear Results</button>
                }

            </form>

        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
