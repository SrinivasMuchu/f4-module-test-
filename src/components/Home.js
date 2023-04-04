import React, { useEffect } from 'react';
import { useSelector, useDispatch,connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import './Hstyle.css'


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { loading, posts, error } = useSelector((state) => state.posts);

  if (loading) {
    return <center><img src='https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif' alt='loader'/></center>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Social Media App</h2>
      <div className='container'> 
        {posts.map((post) => (
          <div key={post.id} className="grid-container">
            <img src="https://fastly.picsum.photos/id/795/200/200.jpg?hmac=frCAqjE9buwwg1NjgwTe6Ef_WWIJOl5h2c6-TFjnlA4" alt=''/>
            <p>User Id: {post.userId}</p>
            <p>Title: {post.title}</p>
            <p>Body: {`${post.body.slice(0, 50)}...`}</p>
              <a href={`/item/${post.id}`}>Read More...</a>
            </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  loading: state.loading,
});

export default connect(mapStateToProps, { fetchPosts })(Home);
