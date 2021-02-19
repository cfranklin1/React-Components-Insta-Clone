import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { posts, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={props.username}
        thumbnailUrl={props.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={props.imageUrl}
        />
      </div>
      {/* Is LpikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(props.id)} />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
