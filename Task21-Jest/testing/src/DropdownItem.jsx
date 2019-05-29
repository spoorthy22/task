import React from 'react';
import PropTypes from 'prop-types';

export default class DropdownItem extends React.Component {
  render() {
    return (
    {this.props.text}
    );
  } 
} 

DropdownItem.propTypes = { 
	text: React.PropTypes.string, 
	link: React.PropTypes.string, 
}; 

DropdownItem.defaultProps = { text: ”, link: ‘#’, };

DropdownItem.propTypes = { 
	text: React.PropTypes.string, 
	link: React.PropTypes.string, 
}; 

DropdownItem.defaultProps = { text: ”, link: ‘#’, };