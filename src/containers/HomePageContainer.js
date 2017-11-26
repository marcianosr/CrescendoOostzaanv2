import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomePageContainer extends Component {
	constructor() {
		super();
	}

	render() {
		const { loading, posts } = this.props;
		console.log(posts, 'posts');
		return (
			<section>
				<h2>HomePageContainer</h2>
				{ loading && <div> loading... </div>}
				{ !loading && <div> {posts.posts} </div>}
			</section>
		)
	}
}

// Map HomePageContainer state to props and connect it to Redux.
function mapStateToProps(state) {
  return {
    loading: state.loading,
		posts: state.posts
  };
}

export default connect(mapStateToProps)(HomePageContainer);
