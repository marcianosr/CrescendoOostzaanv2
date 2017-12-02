import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/posts';

class HomePageContainer extends Component {
	constructor(props) {
		super(props);
		console.log('HomePageContainer')
	}

	componentDidMount() {
		this.props.getPosts();
	}

	render() {
		const { loading, posts } = this.props;
		console.log(this.props.loading)

		return (
			<section>
				<h2>HomePageContainer</h2>

				{loading && <div> loading... </div>}

				{!loading &&
					posts.map((post) => {
						return (
							<div key={post.id}>
								<h1>{post.title}</h1>
								<p>{post.body}</p>
							</div>
						)

					})
				}
			</section>
		)
	}
}

/*	Map HomePageContainer state to props and connect it to Redux.
	It receives the state from the Store and maps it (somewhere behind the scenes)
	to the connected component */

const mapStateToProps = state => {
  return {
		posts: state.posts,
  };
}

const mapDispatchToProps = {
	getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
