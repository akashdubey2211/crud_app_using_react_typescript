import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { RouteComponentProps } from 'react-router';
import { Post } from '../../reducers/postsReducer';
import { fetchPost } from '../../actions/postsActions';

interface PostShowProps extends RouteComponentProps<OwnPropsParams> {
    post: Post;
    fetchPost: (id: number) => void;
}

class PostShow extends Component<PostShowProps> {
    componentDidMount(): void {
        this.props.fetchPost(Number(this.props.match.params.id));
    }

    render() {
        if (!this.props.post) {
            return null;
        }
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">{this.props.post.firstname}</div>
                    <div className="header">{this.props.post.lastname}</div>
                    <div className="header">{this.props.post.age}</div>
                    <div className="header">{this.props.post.number}</div>
                </div>
            </div>
        );
    }
}

interface OwnPropsParams {
    id: string;
}

function mapStateToProps(
    state: RootState,
    ownProps: RouteComponentProps<OwnPropsParams>
) {
    return {
        post: state.posts.items[Number(ownProps.match.params.id)]
    };
}

export default connect(
    mapStateToProps,
    { fetchPost }
)(PostShow);
