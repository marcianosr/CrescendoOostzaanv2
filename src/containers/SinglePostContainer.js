import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePost from 'src/components/posts/Single';
import { fetchSinglePost } from 'src/actions/posts';

import Button from 'src/components/button/Button';
import Navigation from 'src/components/navigation/Navigation';


class SinglePostContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchSinglePost(this.props.match.params.slug);
	}

	render() {
    const { singlePost, loading, error } = this.props;

		return (
      <div>
        <Navigation type='transparent' />
        {loading && <span>Loading...</span>}
        {!error && <SinglePost {...this.props.singlePost} />}
        {error && <p>Helaas kan het bericht niet worden geladen.</p>}
      </div>
		)
	}
}


const mapStateToProps = state => {
  return {
    singlePost: state.singlePost.item,
    loading: state.singlePost.loading,
    error: state.singlePost.error
  }
}

const mapDispatchToProps = {
  fetchSinglePost
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);
