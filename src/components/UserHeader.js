import React from 'react';
// import _ from 'lodash';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const { user } = this.props;
        console.log(user);
        // var obj = _.find(this.props.users, function (obj) { return obj.id === this.props.userId; });
        // console.log(obj);
        // const user = {
        //     name: 'Prachi'
        // };

        

        // const user = this.props.users.find(user => user.id === this.props.userId);

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
    // console.log(state.users);
    return {user : state.users.find( user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);