import React from 'react';

import PropTypes from 'prop-types';
import PostHeader from '../postHeader/PostHeader';

import './style.css';

const Post = (props) => {
  const { post } = props;
  return (
    <li className="post">
      <PostHeader image={post.avatar} name={post.name} time={post.time} />
      <p>{post.content}</p>
    </li>
  );
};

Post.defaultProps = {
  post: {},
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
