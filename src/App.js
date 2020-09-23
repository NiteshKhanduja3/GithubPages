import React, { Fragment, useState } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import User from './components/users/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import UsersItem from './components/users/UsersItem';
import axios from 'axios'
import About from './components/pages/About';
const App = () => {

  
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  // async componentDidMount(){
  //   this.setState({loading:true})
  //     const res = await
  //     axios
  //     .get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //    this.setState({users:res.data,loading:false})

  //   }

  const searchUsers = async (text) => {
    console.log(text)
    setLoading(true) // Before Getting results
    const res = await
      axios
        .get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(res.data.items)
    setLoading(false)

  }

  //get a single user
  const getUser = async (username) => {
    setLoading(true) // Before Getting results
    const res = await
      axios
        .get(`https://api.github.com/users/${username}?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setLoading(false)
    setUser(res.data)
    console.log(res.data)

  }



  //clear user from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }

  //set Aleert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })

    setTimeout(() => setAlert(null), 5000)
  }

  return (
    <Router>
      <div className="App">
        <NavBar title="Github" />
        {/* <UsersItem/> */}
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path="/" render={props => (
              <Fragment>

                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={
                  users.length > 0 ? true : false}
                  setAlert={showAlert}
                />

                <Users loading={loading} users={users} />

              </Fragment>
            )}
            />

            <Route exact path='/about' component={About} />

            <Route exact path='/user/:login' render={
              props => (
                <User
                  {...props}
                  getUser={getUser}
                  user={user}
                  loading={loading} />
              )} />


          </Switch>

        </div>





      </div>

    </Router>
  );

}




export default App;
