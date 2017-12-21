import React, { Component } from 'react';
import { connect } from 'react-redux';
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

        {loading && <span>Loading...</span>}
				{/* <h1> {this.props.posts && this.props.posts[0].id} </h1> */}
				{!error && posts && posts.length &&
					posts.map((post, i) => {
						return (
							<div key={i}>
								<h1>{post.title}</h1>
								<p>{post.body}</p>
							</div>
						)

					})
				}
        {error && <p>Error: {error}</p>}
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
