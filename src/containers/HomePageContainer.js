import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'src/components/slider/slider';

import { fetchPosts } from 'src/actions/posts';

import Block from 'src/components/block/Block';
import Title from 'src/components/title/Title';
import Button from 'src/components/button/Button';
import PostsList from 'src/components/posts/List'


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

        <Block>
          {loading && <span>Loading...</span>}
          {!error && posts && posts.length &&
            <div>

              <PostsList posts={posts} />
            </div>
          }
          {error && <p>Helaas kunnen de berichten niet worden geladen.</p>}
        </Block>

        <Block color='white'>
          <Title>Over Crescendo</Title>
          <p>In het pittoreske Oostzaan vindt u de Christelijke Muziekvereniging Crescendo. Dit fanfareorkest, opgericht op 1 november 1912, bestaat uit ruim veertig leden.De muzikanten van Crescendo vertegenwoordigen vele koperblaasinstrumenten. Onder leiding van dirigent Bart Koning treedt het orkest een aantal keer per jaar op bij diverse gelegenheden.</p>
          <Button normal>Over Crescendo</Button>
        </Block>

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
