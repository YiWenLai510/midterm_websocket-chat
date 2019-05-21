import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainLayout from './MainLayout';
import Loader from './Loader';

export default class newUser extends Component {
	

	render() {
		
		return (
       
             <Dialog
                title="Add User"
                actions={
                    <ListItem>
                        <FlatButton label="Add"></FlatButton>
                        <FlatButton label="return">
                            
                        </FlatButton>
                    </ListItem>
                }
                modal={false}
            >
            {
                !false
                ?<Loader/>
                :<h1>False</h1>
            }
            </Dialog>
        

		)
	}
}