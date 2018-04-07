//React dependencies
import React, { Component } from 'react';

//Material-UI stuff
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import { indigo400 } from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';

//stylesheet
import './Layout.css';

//higher-order component
import Wrapper from '../Wrapper/Wrapper';

//context
import { MyContext } from '../../state/MyProvider';

//components
import Header from '../../components/Header/Header';
import OptionForm from '../../components/OptionForm/OptionForm';

//component
const layout = (props) => (
  //using Context
  <MyContext.Consumer>
    {(context) => (
      <div>
        <Header />
        <Dialog
          title="Decision"
          modal={false}
          actions={[
            <FlatButton
              label="Alright"
              primary={true}
              onClick={context.toggleOpen}
            />,
          ]}
          open={context.state.open}
          onRequestClose={context.toggleOpen}
        > 
          {
            <p style={{textAlign: 'center', fontSize: '20px'}}>
              <strong>
                {context.state.decisions[Math.floor(Math.random() * context.state.decisions.length)]}
              </strong>    
            </p>
          }
        </Dialog>
        <Paper 
          className='Paper'
          style={props.background}
          zDepth={2}
        >
          <ThemeToggle />
          {context.state.decisions.length > 1 && (
            <RaisedButton 
              label="DECIDE FOR ME" 
              onClick={context.toggleOpen}
              backgroundColor={indigo400}
              style={{width: "50%", margin: '15px auto 0 auto'}}
              labelStyle={{fontSize: "20px"}}
            />
          )}
          {context.state.decisions.length > 0 && (
            <Wrapper width="50">
              <Paper zDepth={3}>
                <List style={{marginBottom: '15px'}}>
                  {context.state.decisions.map((decision, index) => (
                    <ListItem 
                      key={index} 
                      primaryText={decision} 
                      rightIcon={
                        <i 
                          className="material-icons material-icons-delete"
                          onClick={(index) => context.handleOptionRemove(index)}
                        >delete</i>
                      } 
                    />
                  ))}
                </List>
              </Paper>
              {
                context.state.decisions.length > 1 && ( 
                  <React.Fragment>
                    <RaisedButton 
                      label="Remove All" 
                      backgroundColor="#ED4337"
                      className="material-buttons"
                      onClick={context.handleAllRemove}
                    /> 
                  </React.Fragment>
                )
              }
            </Wrapper>
          )}

          <Wrapper width="70" style={{marginTop: "55px"}}>
            <OptionForm />
          </Wrapper>
        </Paper>
      </div>
    )}
  </MyContext.Consumer>

);
export default layout;