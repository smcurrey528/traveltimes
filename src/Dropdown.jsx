import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >Montreal</DropdownItem>
          <DropdownItem divider />
          <DropdownItem >Hong Kong</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Paris</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Cartagena</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
