//React dependencies
import React, { Component } from 'react';

//creating Context
const MyContext = React.createContext();

//Provider component
class MyProvider extends Component {
  state = {
    decisions: [],
    themeToggle: true,
    newOptionContent: '',
    isEmpty: true,
    open: false
  }

  render() {
    return (
      <MyContext.Provider value={{
        //state
        state:this.state,

        //actions
        //toggling Material-UI themes
        updateTheme: () => {
          let newToggle = !this.state.themeToggle;
          this.setState({themeToggle: newToggle})
        },

        //handling user input for OptionForm component
        handleOptionInput: (e) => {
          this.setState({
            newOptionContent: e.target.value
          })
        },
        
        //submitting user input for OptionForm component
        handleOptionSubmit: () => {
          const newOption = this.state.newOptionContent;
          const newDecisions = [...this.state.decisions];
          newDecisions.push(newOption);
          this.setState({
            decisions: newDecisions,
            newOptionContent: ''
          })
        },

        //removing selected option from the array
        handleOptionRemove: (index) => {
          const currentList = [...this.state.decisions];
          currentList.splice(index, 1);
          this.setState({
            decisions: currentList
          })
        },

        //removing all options from the array
        handleAllRemove: () => {
          this.setState({decisions: []})
        },

        //checking whether or not Dialog component is open
        toggleOpen: () => {
          const current = !this.state.open
          this.setState({open: current})
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

//exporting Provider to wrap it around the main App component
export default MyProvider;

//exporting Context
export {MyContext};