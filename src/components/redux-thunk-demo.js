import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as blogActionCreator from '../store/blog/actions';
import * as userActionCreator from '../store/user/actions';

import cssImg from '../assets/images/aws.png';
require('../assets/styles/main.scss');



class demo extends React.Component {

    componentDidMount() {
        console.log('mounted.....>', this.props.blogList)
        // dipatch function with redux-thunk middleware
        this.props.blogFetchActions.asyncUpdateBlogList()
        this.props.blogFetchActions.asyncHotsList()
        this.props.userFetchActions.asyncLogin('Jason', '******')
    }

    render() {
        return <div>
            <h3 className='main-title'>title</h3>
            <img src={cssImg}></img>
            {
                this.props.login.map(item => {
                    return <div key={item.name}>
                        {item.name}
                    </div>
                })
            }
            {
                this.props.blogList.map(item => {
                    return <div key={item._id}>
                        {item._id}
                    </div>
                })
            }
            {
                this.props.hots.map(item => {
                    return <div key={item._id}>
                        {item.title}
                    </div>
                })
            }
        </div>
    }
}

function mapStateToProps(state) {
    console.log('state....>', state)
    return {
        blogList: state.blogList,
        hots: state.hots,
        login: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return {
        blogFetchActions: bindActionCreators(blogActionCreator, dispatch),
        userFetchActions: bindActionCreators(userActionCreator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(demo);