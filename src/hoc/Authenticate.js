import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { isAuthenticated } = this.props;

      if (!isAuthenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return (
        <div>
          { this.props.isAuthenticated ? <ComposedComponent {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  };

  const mapDispatchToProps = dispatch => bindActionCreators({
    redirect: () => push('/signin')
  }, dispatch);

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticate);
}