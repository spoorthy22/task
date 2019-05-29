import React from 'react';
import PropTypes from 'prop-types';

export default class DropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
        {this.props.title}
    );
  }
}

DropdownButton.propTypes = {
  title: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

DropdownButton.defaultProps = {
  title: 'Dropdown',
};

