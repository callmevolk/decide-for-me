//dependencies
import React from 'react';

//context
import {MyContext} from '../../state/MyProvider';

//Material-UI stuff
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {indigo400} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

//stylesheet
import './OptionForm.css';

//component
const optionForm = () => {
  return (
    //using Context
    <MyContext.Consumer>
      {(context) => (
        <div className="OptionForm">
          <TextField
            hintText="example: wash the dishes"
            floatingLabelText="Enter an option"
            floatingLabelShrinkStyle={{color: indigo400}}
            underlineFocusStyle={{borderColor: indigo400}}
            value={context.state.newOptionContent}
            onChange={context.handleOptionInput}
            className="TextField"
          />
          <FloatingActionButton
            backgroundColor={indigo400}
            disabled={context.state.newOptionContent == ''}
            onClick={context.handleOptionSubmit}
            mini
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      )}
    </MyContext.Consumer>
  );
};

//default export
export default optionForm;