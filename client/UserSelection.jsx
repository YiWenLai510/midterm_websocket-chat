import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import newUser from './newUser';
import Loader from './Loader';
import {  BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'

export default class UserSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      availableUsers: null
    }

    this.handleSelection = this.handleSelection.bind(this)
    this.renderUserItems = this.renderUserItems.bind(this)

    this.props.getAvailableUsers((err, availableUsers) => {
      this.setState({ availableUsers })
    })
  }

  handleSelection(selectedUser) {
    this.props.register(selectedUser.name)
  }

  renderUserItems() {
    return this.state.availableUsers.map(user => (
      <ListItem
        onClick={() => this.handleSelection(user)}
        primaryText={user.name}
        secondaryText={user.statusText}
        key={user.name}
        leftAvatar={<Avatar src={user.image} alt="" />}
      />
    ))
  }

  render() {
   

    return (
      <Dialog
        title="Pick your character."
        actions={
          <ListItem>
              <FlatButton >
                  <NavLink to="/user/addUser">
                    Add Users
                  </NavLink>
              </FlatButton>

              <FlatButton
                label="Cancel"
                primary
                onClick={this.props.close}
              />
          </ListItem>
        }
        modal={false}
        open
        onRequestClose={this.props.close}
      >
        {
          !this.state.availableUsers
            ? <Loader />
            : (
              <List>
                { this.renderUserItems() }
              </List>
            )
        }
         <Switch>
            <Route exact path="/user/addUser" component={newUser}/>
         </Switch>
      </Dialog>
     
    )
  }
}
