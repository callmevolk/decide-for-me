//React dependencies
import React from 'react';

//Context
import { MyContext } from '../../state/MyProvider';

//Material UI
import { indigo400 } from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';

//stateless component
const themeToggle = () => {
  return (
    //using Context
    <MyContext.Consumer>
      {(context) => (
        <Toggle
          label={context.state.themeToggle === true ? 'Dark Theme Off' : 'Dark Theme On'}
          onToggle={context.updateTheme}
          style={{maxWidth: '200px', textAlign: 'right'}}
          thumbSwitchedStyle={{backgroundColor: indigo400}}
          trackSwitchedStyle={{backgroundColor: indigo400}}
        />
      )}

    </MyContext.Consumer>
  );
};

//default export
export default themeToggle;