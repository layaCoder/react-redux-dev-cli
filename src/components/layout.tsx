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
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './home'
import UserCoponent from './user'


require('../assets/styles/main.scss');

interface compProps {
    blogList: Array<blogItem>;
    hots: Array<hotsItem>;
    login: User;
    blogFetchActions: any;
    userFetchActions: any;
    history?: any;
}
interface compState {
    count: number,
}

// 'DemoProps' describes the shape of props.
// if State is never set , we will use the '{}' type instead of compState.

class demo extends React.Component<compProps, compState>{

    constructor(props: any) {
        super(props);
        this.state = {
            count: 0,
        }
        this.btnToHome = this.btnToHome.bind(this)
        this.btnToUser = this.btnToUser.bind(this)
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
            <p>login?  {this.props.login.login ? 'true' : 'false'}</p>
            <p>{this.props.login._id}</p>
            <p>{this.props.login.name}</p>
            <p>{this.props.login.avatarUrl}</p>
        </div>
    }

    btnToHome(): void {
        this.props.history.push('/layout/home')
    }

    btnToUser(): void {
        this.props.history.push('/layout/user')
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
            <div>
                <button onClick={this.btnToHome}>ToHome</button>
                <button onClick={this.btnToUser}>ToUser</button>
            </div>
            <h2>Child Route</h2>
            {/* <Route path='/layout/home' render={props => <Home {...props} />} /> */}
            <Route path='/layout/home' component={Home} />
            <Route path='/layout/user' component={UserCoponent}></Route>
        </div>
    }
}

function mapStateToProps(state: any) {
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