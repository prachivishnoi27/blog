import React from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        // console.log(user);
        
        if(!user){
            return null;
        }

        return (
            <div className="header">
                {user.name}
            </div>
        );
    };
};

const mapStateToProps = (state, ownProps) => {
    return {user : state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);