import React, {Component} from 'react';
import {Menu, MenuItem1, MenuItem2} from './styles';

class SalonMenu extends Component {
  state={
    menuSelected: 'info'
  };

  _selectedMenu = (selectedItem='info') => {
    this.setState({menuSelected: selectedItem});
  };

  render(){
    const infoSelected = this.state.menuSelected==='info' && true;
    const schemaSelected = this.state.menuSelected==='schema' && true;
    return (
      <Menu>
        <MenuItem1
          selected={infoSelected}
          onClick={()=>this._selectedMenu('info')}
          style={{cursor: 'pointer'}}
        >
          Info
        </MenuItem1>
        <MenuItem2 
          selected={schemaSelected}
          onClick={()=>this._selectedMenu('schema')}
          style={{cursor: 'pointer'}}
        >
          Schema
        </MenuItem2>
      </Menu>
    );
  }
};

export default SalonMenu;