import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions';

class user extends React.Component {

    componentDidMount() {
        console.log('mounted.....>', this.props.blogList)
        this.props.fetchActions.asyncUpdateBlogList();
    }

    render() {
        return <div>
            {
                this.props.blogList.map(item => {
                    return <div key={item._id}>
                        {item._id}
                    </div>
                })
            }
        </div>
    }
}

function mapStateToProps(state) {
    return {
        blogList: state.blogList.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchActions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(user);