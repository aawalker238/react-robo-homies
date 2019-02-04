import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.error) {
      return <h1>Ooops. That is not valid.</h1>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
