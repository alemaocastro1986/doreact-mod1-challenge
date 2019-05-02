import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

const PostHeader = (props) => {
  const { image, name, time } = props;

  return (
    <div className="postHeader">
      <img src={image} alt="Avatar" />
      <div className="info">
        <strong>{name}</strong>
        <span>{time}</span>
      </div>
    </div>
  );
};

PostHeader.defaultProps = {
  image: '',
  name: '',
  time: '',
};

PostHeader.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
};

export default PostHeader;
