import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { bindActionCreators } from 'redux';
import { asyncHotsList, asyncUpdateBlogList } from '../store/blog/actions';
import { asyncLogin } from '../store/user/actions';
import * as awsImg from '../assets/images/aws.png';
import { blogItem, hotsItem } from '../store/blog/modle';
import { User } from '../store/user/modle';
require('../assets/styles/main.scss');

interface compProps {
    blogList: Array<blogItem>;
    hots: Array<hotsItem>;
    login: User;
    blogFetchActions: any;
    userFetchActions: any;
}
interface compState {
    count: number,
}

// 'DemoProps' describes the shape of props.
// if State is never set , we will use the '{}' type instead of compState.

class demo extends React.Component<compProps, compState>{

    constructor(props: compProps) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log('mounted.....>', this.props.blogList)
        // dipatch function with redux-thunk middleware
        this.props.blogFetchActions.asyncUpdateBlogList()
        this.props.blogFetchActions.asyncHotsList()
        this.props.userFetchActions.asyncLogin('Jason', '******')
    }

    renderUserState() {
        return <div>
            <p>
                login?  {this.props.login.login ? 'true' : 'false'}
            </p>
            <p>
                {this.props.login._id}
            </p>
            <p>
                {this.props.login.name}
            </p>
            <p>
                {this.props.login.avatarUrl}
            </p>
        </div>
    }

    render() {
        const showUserState = this.props.login.login ? 'block' : 'none';

        return <div>
            <h3 className='main-title'>title</h3>
            <img src={awsImg}></img>
            {
                <div style={{ display: showUserState }}>
                    {this.renderUserState()}
                </div>
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