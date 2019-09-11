import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { asyncHotsList, asyncUpdateBlogList } from '../store/blog/actions';
import { asyncLogin } from '../store/user/actions';
import * as awsImg from '../assets/images/aws.png'

require('../assets/styles/main.scss');


export interface DemoProps {
    blogList: Array<any>;
    login: Array<any>;
    hots: Array<any>;
    blogFetchActions: any;
    userFetchActions: any;
}

// 'DemoProps' describes the shape of props.
// State is never set so we use the '{}' type.

class demo extends React.Component<DemoProps, {}>{

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
            <img src={awsImg}></img>
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

function mapStateToProps(state: any) {
    console.log('state....>', state)
    return {
        blogList: state.blogList,
        hots: state.hots,
        login: state.login
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        blogFetchActions: bindActionCreators({ asyncHotsList, asyncUpdateBlogList }, dispatch),
        userFetchActions: bindActionCreators({ asyncLogin }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(demo);