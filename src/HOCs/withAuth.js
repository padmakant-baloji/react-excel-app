import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

export default function withAuth(WrappedComponent) {
    class AuthorizedContainer extends React.Component {
        render() {
            const user = this.props.session.user;
            if (!user) {
                return <Redirect to="/login" />;
            } else {
                return <WrappedComponent {...this.props} />;
            }
        }
    }
    const mapStateToProps = state => ({
        session: state.session
    })
    return connect(mapStateToProps)(AuthorizedContainer);
}