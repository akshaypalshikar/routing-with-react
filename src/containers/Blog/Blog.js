import React, { Component } from 'react';
// import axios from 'axios';

import { Route, NavLink, Switch } from 'react-router-dom';


import './Blog.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/' exact>Home</NavLink></li>

                            <li><NavLink to={{
                                pathname: 'newPost',           //absolute path
                                //pathname: this.props.match.url+'/new-post',           //relative path  
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact component={Posts} />
                <Switch>
                    <Route path='/newPost' exact component={NewPost} />
                    <Route path='/:postId' exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;