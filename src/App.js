//React dependencies
import React, { Component } from 'react';

//Context
import { MyContext } from './state/MyProvider';

//Material UI stuff
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Layout component
import Layout from './containers/Layout/Layout';

//component
const app = () => (
  //using Context
  <MyContext.Consumer>
    {(context) => {
    //changing background color according to toggled theme
      if (context.state.themeToggle) {
        return (
          <MuiThemeProvider>
            <Layout themeToggle background={{backgroundColor: 'white', transition: 'background-color .2s'}} />
          </MuiThemeProvider>
        )
      } else {
        return (
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Layout background={{backgroundColor: '#303030', transition: 'background-color .2s'}} />
          </MuiThemeProvider>             
        )
      }
    }}
  </MyContext.Consumer>
)

//default export
export default app;