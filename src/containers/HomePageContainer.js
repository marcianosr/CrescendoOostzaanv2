import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from '../components/posts/List'
import { fetchPosts } from '../actions/posts';

import styles from './Title.scss';


class HomePageContainer extends Component {
	constructor(props) {
		super(props);
    console.log(styles, 'styles')
	}

	componentDidMount() {
    this.props.fetchPosts();
	}

	render() {
		const { posts, loading, error } = this.props;

		return (
			<section>
				<h2 class={styles.title}>HomePageContainer</h2>
        {/*  Setup loading and errors hee*/}

        {loading && <span>Loading...</span>}
        {!error && posts && posts.length && <PostsList posts={posts} loading={loading} error={error}/>}
        {error && <p>Helaas kunnen de berichten niet worden geladen.</p>}
        
			</section>
		)
	}
}


/*	Map HomePageContainer state to props and connect it to Redux.
	It receives the state from the Store and updated reducers and maps it (somewhere behind the scenes)
	to the connected component */

const mapStateToProps = state => {
  console.log(state, 'home')
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
