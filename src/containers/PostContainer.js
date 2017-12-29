import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePost from '../components/posts/Single';
import { fetchSinglePost } from '../actions/posts';



class PostContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.fetchSinglePost();
	}

	render() {
		return (
      <SinglePost {...this.props.singlePost} />
		)
	}
}


const mapStateToProps = state => {
  console.log(state, 'state')
  return {
    singlePost: state.singlePost.item,
    loading: state.singlePost.loading,
    error: state.singlePost.error
  }
}

const mapDispatchToProps = {
  fetchSinglePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
