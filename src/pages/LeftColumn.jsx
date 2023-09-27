import React from 'react';
import Menu from '../components/Menu';

const LeftColumn = (props) => {

  return (
    <Menu onLogout={props.onLogout}/>
  )

}

export default LeftColumn;
