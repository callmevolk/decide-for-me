//dependencies
import React from 'react';

//stylesheet
import './Wrapper.css';

//component
const wrapper = (props) => {
  return (
    <div className='Wrapper' style={{width: `${props.width}%`, marginTop:'25px'}}>
      {props.children}
    </div>
  );
};

//default export
export default wrapper;