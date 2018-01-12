import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from '../components/slider/slider';

import { fetchPosts } from '../actions/posts';
import PostsList from '../components/posts/List'

import styles from './Title.scss';


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
        <Slider />

				{/* <h2 className={styles.title}>HomePageContainer</h2> */}

        {loading && <span>Loading...</span>}
        {!error && posts && posts.length &&
          <div>

            <PostsList posts={posts} />
          </div>
        }
        {error && <p>Helaas kunnen de berichten niet worden geladen.</p>}

			</section>
		)
	}
}


/*	Map HomePageContainer state to props and connect it to Redux.
	It receives the state from the Store and updated reducers and maps it (somewhere behind the scenes)
	to the connected component */

const mapStateToProps = state => {
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
