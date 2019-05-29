import React from 'react';
import DropdownButton from './DropdownButton.jsx';
import DropdownItem from './DropdownItem.jsx';
import PropTypes from 'prop-types';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      opened: false,
    };
  }

  handleClick() {
    this.setState(
      {
        opened: !this.state.opened,
      },
    );
  }

  render() {
    const content = this.state.opened ? (

    this.props.menuItems.map(item)

    ) : null; return ( < div className="dropdown"> {content});
  } 
} 
Dropdown.propTypes = { menuItems: React.PropTypes.arrayOf(React.PropTypes.object), title: React.PropTypes.string }; 
Dropdown.defaultProps = { menuItems: [], title: 'Dropdown'};