import React from 'react';

export const PostDetail = props => {
  console.log(props);
  return [
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(3,3,3,.3)',
        zIndex: '100'
      }}
    >
      {props.testvalue}
    </div>,
    <div>DEtail</div>
  ];
};

export default PostDetail;
