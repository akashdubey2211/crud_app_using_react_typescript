import React from 'react';
import { Post } from '../../reducers/postsReducer';
import { Link } from 'react-router-dom';
import '../styles/style.css';

interface PostListItemProps {
    post: Post;
}

const PostsListItem = ({ post }: PostListItemProps) => (
    <div className="item">
        <div className="content">
            <br />
            <table>
                <tr>
                    <td>
                        {' '}
                        <Link to={`/posts/${post.id}`}>{post.firstname}</Link>
                    </td>
                    <td>
                        <Link to={`/posts/${post.id}`}>{post.lastname}</Link>
                    </td>
                    <td>
                        <Link to={`/posts/${post.id}`}>{post.age}</Link>
                    </td>
                    <td>
                        {' '}
                        <Link to={`/posts/${post.id}`}>{post.number}</Link>
                    </td>
                    <td>
                        <Link
                            to={'/posts/edit/' + post.id}
                            className="ui green basic button"
                        >
                            Edit
                        </Link>
                        <Link
                            to={'/posts/delete/' + post.id}
                            className="ui red basic button"
                        >
                            Delete
                        </Link>
                    </td>
                </tr>
            </table>

            <div />
        </div>
    </div>
);

export default PostsListItem;
