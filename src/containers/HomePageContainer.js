import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from '../components/posts/List'
import { fetchPosts } from '../actions/posts';


class HomePageContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchPosts();
	}

	render() {
		const { posts, loading, error } = this.props;

		return (
			<section>
				<h2>HomePageContainer</h2>
        <PostsList posts={posts} loading={loading} error={error}/>
			</section>
		)
	}
}


/*	Map HomePageContainer state to props and connect it to Redux.
	It receives the state from the Store and updated reducers and maps it (somewhere behind the scenes)
	to the connected component */

const mapStateToProps = state => {
  console.log(state, 'state')
  return {
    posts: state.posts.items,
    loading: state.posts.loading,
    error: state.posts.error
  }
}

const mapDispatchToProps = {
  fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
