import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from './history';
import PostsList from './containers/PostsList';
import PostsNew from './containers/PostsNew';
import PostShow from './containers/PostShow/PostShow';
import PostEdit from './containers/PostEdit/PostEdit';
import PostDelete from './containers/PostDelete/PostDelete';
import './components/styles/style.css';

const App = () => {
    return (
        <>
            <Router history={history}>
                <div>
                    <div className="header">
                        <div className='navbar'>
                        <Link to={'/'} className="navigaton">
                            User List
                        </Link>
                        <Link to={'/posts/new'} className="navigaton">
                            Create New User
                        </Link>
                        </div>
                        
                    </div>

                    <Switch>
                        <Route path="/" exact component={PostsList} />
                        <Route path="/posts" exact component={PostsList} />
                        <Route path="/posts/new" exact component={PostsNew} />
                        <Route
                            path="/posts/edit/:id"
                            exact
                            component={PostEdit}
                        />
                        <Route
                            path="/posts/delete/:id"
                            exact
                            component={PostDelete}
                        />
                        <Route path="/posts/:id" exact component={PostShow} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default App;
