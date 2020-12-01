import React from 'react';

class citySelector extends React.Component {
  render() {
    return (
      <>
        <button> {this.props.category}</button>
      </>
    );
  }
}

export default citySelector;
